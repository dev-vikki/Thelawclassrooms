"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Mock existing data (replace with Supabase call in real implementation)
const existingCategories = [
  { title: "Math", image: "math.jpg" },
  { title: "Science", image: "science.jpg" },
];
const existingTopics = ["Algebra", "Physics"];

interface MCQ {
  question: string;
  choices: string[];
  correctIndex: number | null;
}

export default function AdminMCQPage() {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [topic, setTopic] = useState("");
  const [mcqs, setMcqs] = useState<MCQ[]>([
    { question: "", choices: ["", ""], correctIndex: null },
  ]);
  const [categorySuggestions, setCategorySuggestions] = useState<string[]>([]);
  const [topicSuggestions, setTopicSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const filtered = existingCategories
      .map((c) => c.title)
      .filter((c) => c.toLowerCase().includes(categoryTitle.toLowerCase()));
    setCategorySuggestions(filtered);

    const filteredTopics = existingTopics.filter((t) =>
      t.toLowerCase().includes(topic.toLowerCase())
    );
    setTopicSuggestions(filteredTopics);
  }, [categoryTitle, topic]);

  const handleMCQChange = (idx: number, field: keyof MCQ, value: any) => {
    const arr = [...mcqs];
    // @ts-ignore
    arr[idx][field] = value;
    setMcqs(arr);
  };

  const handleChoiceChange = (qIdx: number, cIdx: number, value: string) => {
    const arr = [...mcqs];
    arr[qIdx].choices[cIdx] = value;
    setMcqs(arr);
  };

  const addChoice = (qIdx: number) => {
    const arr = [...mcqs];
    if (arr[qIdx].choices.length < 5) {
      arr[qIdx].choices.push("");
      setMcqs(arr);
    }
  };

  const removeChoice = (qIdx: number, cIdx: number) => {
    const arr = [...mcqs];
    if (arr[qIdx].choices.length > 2) {
      arr[qIdx].choices.splice(cIdx, 1);
      setMcqs(arr);
    }
  };

  const addQuestion = () => {
    setMcqs([...mcqs, { question: "", choices: ["", ""], correctIndex: null }]);
  };

  const removeQuestion = (idx: number) => {
    setMcqs(mcqs.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Prevent duplicate category or topic
    const categoryExists = existingCategories.some(
      (c) => c.title.toLowerCase() === categoryTitle.toLowerCase()
    );
    const topicExists = existingTopics.some(
      (t) => t.toLowerCase() === topic.toLowerCase()
    );

    if (categoryExists) {
      alert("Category already exists!");
      return;
    }

    if (topicExists) {
      alert("Topic already exists!");
      return;
    }

    console.log({
      categoryTitle,
      categoryImage,
      topic,
      mcqs,
    });

    alert("Form submitted! Check console.");
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create MCQ Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category & Topic */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Category Title</label>
            <input
              type="text"
              className="mt-1 w-full border px-3 py-2 rounded bg-[#1e1e1e]"
              value={categoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
              required
              list="category-suggestions"
            />
            <datalist id="category-suggestions">
              {categorySuggestions.map((title, i) => (
                <option key={i} value={title} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block font-medium">Category Image</label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full border px-3 py-2 rounded bg-[#1e1e1e]"
              onChange={(e) => setCategoryImage(e.target.files?.[0] || null)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Topic</label>
          <input
            type="text"
            className="mt-1 w-full border px-3 py-2 rounded bg-[#1e1e1e]"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            list="topic-suggestions"
          />
          <datalist id="topic-suggestions">
            {topicSuggestions.map((t, i) => (
              <option key={i} value={t} />
            ))}
          </datalist>
        </div>

        {/* MCQ Questions */}
        {mcqs.map((q, qIdx) => (
          <div key={qIdx} className="p-4 border rounded bg-[#1e1e1e] space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">Question #{qIdx + 1}</h2>
              {mcqs.length > 1 && (
                <button
                  type="button"
                  className="text-red-500 hover:underline"
                  onClick={() => removeQuestion(qIdx)}
                >
                  Remove
                </button>
              )}
            </div>

            <textarea
              className="w-full border px-3 py-2 rounded bg-[#1e1e1e]"
              placeholder="Enter question text..."
              value={q.question}
              onChange={(e) =>
                handleMCQChange(qIdx, "question", e.target.value)
              }
              required
            />

            <div className="space-y-2">
              <p className="font-medium">Choices:</p>
              {q.choices.map((ch, cIdx) => (
                <div key={cIdx} className="flex items-center space-x-2">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name={`correct-${qIdx}`}
                      checked={q.correctIndex === cIdx}
                      onChange={() =>
                        handleMCQChange(qIdx, "correctIndex", cIdx)
                      }
                      required
                    />
                    <span># {cIdx + 1}</span>
                  </label>
                  <input
                    type="text"
                    className="flex-1 border px-3 py-2 rounded bg-[#1e1e1e]"
                    placeholder={`Choice ${cIdx + 1}`}
                    value={ch}
                    onChange={(e) =>
                      handleChoiceChange(qIdx, cIdx, e.target.value)
                    }
                    required
                  />
                  {q.choices.length > 2 && (
                    <button
                      type="button"
                      className="text-red-400 hover:underline"
                      onClick={() => removeChoice(qIdx, cIdx)}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              {q.choices.length < 5 && (
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={() => addChoice(qIdx)}
                >
                  + Add Choice
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Add Question & Submit */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={addQuestion}
          >
            + Add New Question
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Submit All
          </button>
        </div>
      </form>
    </div>
  );
}
