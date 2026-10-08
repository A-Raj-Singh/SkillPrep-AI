import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Search,
  Trash2,
  Play,
  Code2,
  Database,
  Server,
  Braces,
} from "lucide-react";

const initialQuestions = [
  {
    id: 1,
    question: "What is the difference between HashMap and Hashtable in Java?",
    category: "Java",
    difficulty: "Medium",
  },
  {
    id: 2,
    question: "Explain Dependency Injection in Spring Boot.",
    category: "Spring Boot",
    difficulty: "Medium",
  },
  {
    id: 3,
    question: "What is normalization in DBMS?",
    category: "SQL & DBMS",
    difficulty: "Easy",
  },
  {
    id: 4,
    question: "How would you find the longest subarray with sum K?",
    category: "DSA",
    difficulty: "Medium",
  },
  {
    id: 5,
    question: "What is the difference between interface and abstract class?",
    category: "Java",
    difficulty: "Medium",
  },
];

const categoryIcons = {
  Java: Braces,
  "Spring Boot": Server,
  "SQL & DBMS": Database,
  DSA: Code2,
};

function SavedQuestions() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Java", "Spring Boot", "SQL & DBMS", "DSA"];

  const filteredQuestions = useMemo(() => {
    return questions.filter((item) => {
      const matchesSearch = item.question
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [questions, search, category]);

  const removeQuestion = (id) => {
    setQuestions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-4 py-7 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                <Bookmark className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  Saved Questions
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Keep important interview questions for quick revision.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-6 mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
              <p className="text-sm text-slate-400">Saved Questions</p>
              <p className="mt-2 text-2xl font-bold">
                {questions.length}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
              <p className="text-sm text-slate-400">Categories</p>
              <p className="mt-2 text-2xl font-bold">
                {new Set(questions.map((q) => q.category)).size}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
              <p className="text-sm text-slate-400">Showing</p>
              <p className="mt-2 text-2xl font-bold">
                {filteredQuestions.length}
              </p>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="mb-6 flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

              <input
                type="text"
                placeholder="Search saved questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#081225] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500/50"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#081225] px-4 py-3 text-sm text-slate-300 outline-none focus:border-cyan-500/50"
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="bg-[#081225]"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item) => {
                const Icon = categoryIcons[item.category] || Bookmark;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-[#081225] p-5 transition hover:border-cyan-500/20"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>

                        <div>
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-400">
                              {item.category}
                            </span>

                            <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                              {item.difficulty}
                            </span>
                          </div>

                          <h2 className="font-medium leading-6 text-slate-100">
                            {item.question}
                          </h2>
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <Link
                          to="/practice"
                          className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5"
                        >
                          <Play className="h-4 w-4" />
                          Practice
                        </Link>

                        <button
                          onClick={() => removeQuestion(item.id)}
                          className="flex items-center justify-center rounded-lg border border-red-500/10 px-3 py-2 text-red-400 transition hover:bg-red-500/10"
                          title="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-[#081225] px-6 py-16 text-center">
                <Bookmark className="mx-auto h-10 w-10 text-slate-600" />

                <h3 className="mt-4 text-lg font-semibold">
                  No saved questions
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or category filter.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SavedQuestions;