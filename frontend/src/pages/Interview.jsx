import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Clock3,
  Mic,
  MicOff,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

const sampleQuestions = [
  {
    question: "What is the difference between HashMap and Hashtable in Java?",
    type: "technical",
  },
  {
    question: "What is the difference between an interface and an abstract class?",
    type: "technical",
  },
  {
    question: "How does Spring Boot simplify application development?",
    type: "technical",
  },
  {
    question: "Can you explain Dependency Injection with an example?",
    type: "technical",
  },
  {
    question: "What is the difference between ArrayList and LinkedList?",
    type: "technical",
  },
];

function Interview() {
  const location = useLocation();
  const navigate = useNavigate();

  const config = location.state || {
    role: "Java Developer",
    interviewType: "technical",
    selectedSkills: ["Java", "OOP", "DSA"],
    difficulty: "Medium",
    questionCount: 10,
    mode: "voice",
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [transcript, setTranscript] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const recognitionRef = useRef(null);

  const question =
    sampleQuestions[currentQuestion % sampleQuestions.length];

  const totalQuestions = Math.min(
    config.questionCount || 10,
    sampleQuestions.length
  );

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  /*
   * --------------------------------
   * TEXT TO SPEECH
   * --------------------------------
   */
  const speak = (text) => {
    if (isMuted || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);

      // Automatically start listening after AI finishes speaking
      setTimeout(() => {
        startListening();
      }, 400);
    };

    window.speechSynthesis.speak(utterance);
  };

  /*
   * --------------------------------
   * SPEECH RECOGNITION
   * --------------------------------
   */
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening || isSpeaking) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      let finalText = "";
      let interimText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const text = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalText += text;
        } else {
          interimText += text;
        }
      }

      setTranscript(finalText || interimText);
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);

      if (transcript.trim()) {
        processAnswer(transcript);
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setIsListening(false);
  };

  /*
   * --------------------------------
   * PROCESS USER ANSWER
   * --------------------------------
   */
  const processAnswer = (userAnswer) => {
    if (!userAnswer?.trim()) return;

    setIsProcessing(true);

    const newAnswer = {
      question: question.question,
      answer: userAnswer,
      timestamp: new Date().toISOString(),
    };

    setAnswers((prev) => [...prev, newAnswer]);

    /*
     * MOCK BACKEND RESPONSE
     *
     * Later backend team will replace
     * this with API response.
     */
    setTimeout(() => {
      setIsProcessing(false);

      const lower = userAnswer.toLowerCase();

      /*
       * Detect example/help request
       */
      if (
        lower.includes("example") ||
        lower.includes("explain") ||
        lower.includes("help me")
      ) {
        const response =
          "Sure. Let me give you a simple example related to this concept.";

        speak(response);
        return;
      }

      /*
       * Normal answer
       */
      moveToNextQuestion();
    }, 1000);
  };

  /*
   * --------------------------------
   * NEXT QUESTION
   * --------------------------------
   */
  const moveToNextQuestion = () => {
    if (currentQuestion + 1 >= totalQuestions) {
      speak(
        "Great job. You have completed the interview. Your performance report is ready."
      );

      setTimeout(() => {
        navigate("/performance");
      }, 5000);

      return;
    }

    const nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
    setTranscript("");
    setAnswer("");

    setTimeout(() => {
      speak(
        sampleQuestions[nextQuestion % sampleQuestions.length].question
      );
    }, 500);
  };

  /*
   * --------------------------------
   * TEXT ANSWER
   * --------------------------------
   */
  const submitTextAnswer = () => {
    if (!answer.trim()) return;

    processAnswer(answer);
    setAnswer("");
  };

  /*
   * --------------------------------
   * START INTERVIEW
   * --------------------------------
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      speak(question.question);
    }, 800);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis?.cancel();
      recognitionRef.current?.stop();
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030817] text-white">
      {/* HEADER */}
      <header className="border-b border-white/[0.06] bg-[#030817]/90">
        <div className="flex min-h-20 items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/ai-interview")}
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Exit Interview
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
              <Bot className="h-5 w-5" />
            </div>

            <span className="font-semibold">
              SkillPrep<span className="text-cyan-400">-AI</span>
            </span>
          </div>

          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* PROGRESS */}
        <div className="mb-8 w-full">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>

            <span className="text-slate-500">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          {/* MAIN */}
          <main className="min-w-0">
            {/* AI STATUS */}
            <div className="mb-5 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  isSpeaking
                    ? "animate-pulse bg-violet-500/20"
                    : isListening
                    ? "bg-cyan-500/20"
                    : "bg-white/[0.05]"
                }`}
              >
                <Bot
                  className={`h-5 w-5 ${
                    isSpeaking
                      ? "text-violet-400"
                      : isListening
                      ? "text-cyan-400"
                      : "text-slate-400"
                  }`}
                />
              </div>

              <div>
                <p className="text-sm font-semibold">AI Interviewer</p>

                <p className="text-xs text-slate-500">
                  {isSpeaking
                    ? "AI is speaking..."
                    : isListening
                    ? "Listening to you..."
                    : isProcessing
                    ? "Processing your answer..."
                    : "Ready"}
                </p>
              </div>
            </div>

            {/* QUESTION CARD */}
            <section className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Interview Question
                </span>
              </div>

              <h1 className="max-w-4xl text-2xl font-bold leading-tight sm:text-3xl">
                {question.question}
              </h1>

              {/* STATUS */}
              <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                      isListening
                        ? "animate-pulse bg-cyan-500/15"
                        : isSpeaking
                        ? "bg-violet-500/15"
                        : "bg-white/[0.05]"
                    }`}
                  >
                    {isListening ? (
                      <Mic className="h-5 w-5 text-cyan-400" />
                    ) : isSpeaking ? (
                      <Volume2 className="h-5 w-5 text-violet-400" />
                    ) : (
                      <Bot className="h-5 w-5 text-slate-400" />
                    )}
                  </div>

                  <div>
                    <p className="font-medium">
                      {isListening
                        ? "I'm listening..."
                        : isSpeaking
                        ? "AI is speaking..."
                        : isProcessing
                        ? "Processing..."
                        : "Ready"}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {isListening
                        ? "Speak naturally. You don't need to press anything."
                        : isSpeaking
                        ? "Please wait until the AI finishes."
                        : "Your interview will continue automatically."}
                    </p>
                  </div>
                </div>
              </div>

              {/* LIVE TRANSCRIPT */}
              {transcript && (
                <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Your Response
                  </p>

                  <p className="text-sm leading-6 text-slate-300">
                    {transcript}
                  </p>
                </div>
              )}

              {/* TEXT FALLBACK */}
              <div className="mt-6">
                <button
                  onClick={() => setShowTextInput((prev) => !prev)}
                  className="text-xs text-slate-500 underline-offset-4 hover:text-slate-300 hover:underline"
                >
                  {showTextInput
                    ? "Hide text input"
                    : "Prefer typing? Use text input"}
                </button>

                {showTextInput && (
                  <div className="mt-4">
                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Type your answer here..."
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/30"
                    />

                    <button
                      onClick={submitTextAnswer}
                      disabled={!answer.trim() || isProcessing}
                      className="mt-3 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Send className="h-4 w-4" />
                      Submit Answer
                    </button>
                  </div>
                )}
              </div>

              {/* MICROPHONE */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={
                    isListening ? stopListening : startListening
                  }
                  disabled={isSpeaking || isProcessing}
                  className={`flex h-20 w-20 items-center justify-center rounded-full transition ${
                    isListening
                      ? "bg-red-500 shadow-lg shadow-red-500/20"
                      : "bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-violet-500/20"
                  } disabled:cursor-not-allowed disabled:opacity-40`}
                >
                  {isListening ? (
                    <MicOff className="h-7 w-7" />
                  ) : (
                    <Mic className="h-7 w-7" />
                  )}
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-600">
                {isListening
                  ? "Click microphone to stop"
                  : "Voice interview is automatic"}
              </p>
            </section>
          </main>

          {/* SIDE PANEL */}
          <aside className="min-w-0 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Interview Details
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs text-slate-500">Target Role</p>
                  <p className="mt-1 text-sm font-medium">{config.role}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Difficulty</p>
                  <p className="mt-1 text-sm font-medium">
                    {config.difficulty}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Skills</p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {config.selectedSkills?.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* INTERVIEW STATUS */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-semibold">
                  Interview Status
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Interview in progress
              </div>
            </div>

            {/* VOICE INFO */}
            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-cyan-400" />

                <p className="text-sm font-semibold">
                  Voice Interview
                </p>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Speak naturally. The AI will listen to your answer and
                continue the interview automatically.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Interview;