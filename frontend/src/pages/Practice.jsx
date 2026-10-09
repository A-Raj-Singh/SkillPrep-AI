import { useState } from "react";
import {
  Search,
  Code2,
  Database,
  Braces,
  Globe,
  Brain,
  ChevronRight,
  Eye,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";

const topics = [
  {
    id: "java",
    name: "Java",
    icon: Braces,
    questions: 42,
    color: "cyan",
  },
  {
    id: "dsa",
    name: "DSA",
    icon: Code2,
    questions: 58,
    color: "blue",
  },
  {
    id: "spring",
    name: "Spring Boot",
    icon: Globe,
    questions: 35,
    color: "violet",
  },
  {
    id: "sql",
    name: "SQL & DBMS",
    icon: Database,
    questions: 38,
    color: "emerald",
  },
];

const questions = {
  java: [
    {
      question: "What is the difference between == and equals() in Java?",
      answer:
        "== compares primitive values or object references, while equals() is used to compare object content when the class overrides it.",
      difficulty: "Easy",
    },
    {
      question: "Explain the four pillars of OOP.",
      answer:
        "The four pillars are Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      difficulty: "Easy",
    },
    {
      question: "What is the difference between ArrayList and LinkedList?",
      answer:
        "ArrayList is backed by a dynamic array and provides faster random access, while LinkedList uses linked nodes and is better suited for frequent insertions and deletions.",
      difficulty: "Medium",
    },
  ],

  dsa: [
    {
      question: "What is the time complexity of binary search?",
      answer:
        "Binary search has O(log n) time complexity because the search space is divided into half at every step.",
      difficulty: "Easy",
    },
    {
      question: "What is a HashMap and what is its average lookup complexity?",
      answer:
        "HashMap stores key-value pairs using hashing. Average lookup, insertion, and deletion are O(1).",
      difficulty: "Easy",
    },
    {
      question: "When would you use a sliding window technique?",
      answer:
        "Sliding window is commonly used for contiguous subarray or substring problems where the window can be expanded or contracted efficiently.",
      difficulty: "Medium",
    },
  ],

  spring: [
    {
      question: "What is Dependency Injection in Spring?",
      answer:
        "Dependency Injection is a design pattern where Spring provides the required dependencies to a class instead of the class creating them itself.",
      difficulty: "Easy",
    },
    {
      question: "What is the difference between @Controller and @RestController?",
      answer:
        "@RestController combines @Controller and @ResponseBody and is commonly used for REST APIs.",
      difficulty: "Easy",
    },
  ],

  sql: [
    {
      question: "What is the difference between WHERE and HAVING?",
      answer:
        "WHERE filters rows before grouping, while HAVING filters groups after GROUP BY is applied.",
      difficulty: "Easy",
    },
    {
      question: "What is normalization in DBMS?",
      answer:
        "Normalization organizes database tables to reduce data redundancy and improve data integrity.",
      difficulty: "Medium",
    },
  ],
};

function Practice() {
  const [selectedTopic, setSelectedTopic] = useState("java");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const topicQuestions = questions[selectedTopic] || [];

  const currentQuestion =
    topicQuestions[questionIndex % topicQuestions.length];

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  function selectTopic(topicId) {
    setSelectedTopic(topicId);
    setQuestionIndex(0);
    setShowAnswer(false);
    setResult(null);
  }

  function nextQuestion() {
    setQuestionIndex((prev) => (prev + 1) % topicQuestions.length);
    setShowAnswer(false);
    setResult(null);
  }

  function resetQuestion() {
    setShowAnswer(false);
    setResult(null);
  }

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-6 py-8 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <Brain size={16} />
              Practice
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Sharpen Your Skills
            </h1>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Practice technical questions by topic and improve your
              interview readiness.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-7 max-w-8xl">
            <div className="relative max-w-md">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search topics..."
                className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/30"
              />
            </div>
          </div>

          {/* Topic Cards */}
          <div className="mx-auto mt-6 grid max-w-8xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filteredTopics.map((topic) => {
              const Icon = topic.icon;
              const active = selectedTopic === topic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() => selectTopic(topic.id)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-cyan-400/30 bg-cyan-400/[0.07]"
                      : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.14]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        active
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "bg-white/[0.05] text-slate-400"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    {active && (
                      <CheckCircle2
                        size={17}
                        className="text-cyan-400"
                      />
                    )}
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    {topic.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {topic.questions} questions
                  </p>
                </button>
              );
            })}
          </div>

          {/* Practice Area */}
          <div className="mx-auto mt-6 grid max-w-8xl gap-6 xl:grid-cols-[1fr_280px]">

            {/* Question */}
            <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] font-medium text-cyan-300">
                    {topics.find((t) => t.id === selectedTopic)?.name}
                  </span>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                    currentQuestion.difficulty === "Easy"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-amber-400/10 text-amber-400"
                  }`}
                >
                  {currentQuestion.difficulty}
                </span>
              </div>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Question {questionIndex + 1}
                </p>

                <h2 className="mt-3 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Answer */}
              {showAnswer ? (
                <div className="mt-7 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-cyan-400"
                    />

                    <p className="text-sm font-semibold text-cyan-300">
                      Suggested Answer
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {currentQuestion.answer}
                  </p>
                </div>
              ) : (
                <div className="mt-7 flex min-h-36 items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-white/[0.015]">
                  <p className="text-sm text-slate-600">
                    Try answering the question yourself first.
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {!showAnswer ? (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    <Eye size={16} />
                    Show Answer
                  </button>
                ) : (
                  <button
                    onClick={resetQuestion}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300"
                  >
                    <RotateCcw size={15} />
                    Try Again
                  </button>
                )}

                <button
                  onClick={nextQuestion}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  Next Question
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Self Evaluation */}
              {showAnswer && (
                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  <p className="text-xs font-medium text-slate-500">
                    How well did you know this?
                  </p>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => setResult("wrong")}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                        result === "wrong"
                          ? "bg-red-400/10 text-red-400"
                          : "bg-white/[0.03] text-slate-500"
                      }`}
                    >
                      <XCircle size={14} />
                      Need Practice
                    </button>

                    <button
                      onClick={() => setResult("correct")}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                        result === "correct"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-white/[0.03] text-slate-500"
                      }`}
                    >
                      <CheckCircle2 size={14} />
                      I Knew It
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* Sidebar */}
            <aside className="space-y-4">

              {/* Progress */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">
                  Practice Progress
                </p>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-white">
                      68%
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Overall progress
                    </p>
                  </div>

                  <span className="text-xs text-emerald-400">
                    +8% this week
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>

              {/* Current Topic */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">
                  Current Topic
                </p>

                <div className="mt-4">
                  <p className="text-lg font-bold text-cyan-400">
                    {topics.find((t) => t.id === selectedTopic)?.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {topicQuestions.length} questions available
                  </p>
                </div>
              </div>

              {/* Tip */}
              <div className="rounded-2xl border border-violet-400/10 bg-violet-400/[0.04] p-5">
                <p className="text-xs font-semibold text-violet-300">
                  Practice Tip
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Don't immediately reveal the answer. Try explaining the
                  concept out loud like you're answering an interviewer.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;