"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

interface MCQQuestion {
  id: string;
  topic_id?: string | null;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer?: "option_a" | "option_b" | "option_c" | "option_d";
  created_at?: string;
}

export default function MCQsPage() {
  const searchParams = useSearchParams();
  const topicId = searchParams.get("topic");

  const [visible, setVisible] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [selectedMark, setSelectedMark] = useState(1);
  const [selectedNegativeMark, setSelectedNegativeMark] = useState(-0.25);
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [score, setScore] = useState(0);
  const [viewedAnswers, setViewedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [topicId]);

  useEffect(() => {
    const timeout = setTimeout(() => setStartTimer(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!startTimer) return;
    const timer = setInterval(
      () => setSecondsElapsed((prev) => prev + 1),
      1000
    );
    return () => clearInterval(timer);
  }, [startTimer]);

  async function fetchQuestions() {
    try {
      setLoading(true);
      setError(null);

      const query = supabase
        .from("quiz_questions")
        .select("*")
        .order("created_at", { ascending: true });

      const { data, error: supabaseError } = topicId
        ? await query.eq("topic_id", topicId)
        : await query;

      if (supabaseError) throw new Error(supabaseError.message);

      setQuestions((data || []) as MCQQuestion[]);
      setCurrentQuestionIndex(0);
      setSelectedOptionIndex(null);
    } catch (err: any) {
      setError(`Failed to load questions: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion
    ? [
        currentQuestion.option_a,
        currentQuestion.option_b,
        currentQuestion.option_c,
        currentQuestion.option_d,
      ]
    : [];

  const correctIndex = ["option_a", "option_b", "option_c", "option_d"].indexOf(
    currentQuestion?.correct_answer || ""
  );
  const correctAnswerText = options[correctIndex];
  const totalQuestions = questions.length;
  const currentQNum = currentQuestionIndex + 1;
  const progressPercentage =
    totalQuestions > 0 ? (currentQNum / totalQuestions) * 100 : 0;

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const evaluateAnswer = () => {
    if (!currentQuestion) return;

    const isViewed = viewedAnswers.includes(currentQuestion.id);
    if (selectedOptionIndex === null || isViewed) {
      setSkipped((prev) => prev + 1);
    } else {
      setAttempted((prev) => prev + 1);
      if (selectedOptionIndex === correctIndex) {
        setCorrect((prev) => prev + 1);
        setScore((prev) => prev + selectedMark);
      } else {
        setWrong((prev) => prev + 1);
        setScore((prev) => prev + selectedNegativeMark);
      }
    }
  };

  const handleNextQuestions = () => {
    evaluateAnswer();
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setHasAnswered(false);
      setVisible(false);
    } else {
      setShowResult(true);
    }
  };

  const handleLeaveQuiz = () => {
    evaluateAnswer();
    setShowResult(true);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 relative">
      {visible && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full text-center border border-gray-700 shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              Correct Answer
            </h2>
            <p className="text-white text-lg mb-6">
              {correctAnswerText || "No answer found."}
            </p>
            <button
              onClick={() => setVisible(false)}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="w-full mb-10 bg-gray-900 bg-opacity-75 backdrop-blur-sm p-4 flex items-center justify-between z-10">
        <span className="text-sm uppercase tracking-wide text-gray-300">
          {topicId ? `Topic: ${topicId}` : "All Topics"}
        </span>
        <div className="flex flex-col w-full max-w-md mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>
              Question {currentQNum} of {totalQuestions}
            </span>
            <span>{progressPercentage.toFixed(0)}% complete</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 flex items-center">
            ⏱ {formatTime(secondsElapsed)}
          </span>
          <select
            value={selectedMark}
            onChange={(e) => setSelectedMark(Number(e.target.value))}
            className="bg-slate-800 text-white border border-gray-600 rounded px-2 py-1"
          >
            {[1, 2, 3, 4, 5].map((mark) => (
              <option key={mark} value={mark}>
                +{mark}
              </option>
            ))}
          </select>
          <select
            value={selectedNegativeMark}
            onChange={(e) => setSelectedNegativeMark(Number(e.target.value))}
            className="bg-slate-800 text-red-400 border border-gray-600 rounded px-2 py-1"
          >
            {[-0.25, -0.5, -1].map((mark) => (
              <option key={mark} value={mark}>
                {mark}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-2xl bg-[#111] rounded-xl border border-gray-800 p-6 shadow-xl relative">
        <div className="text-xs text-right text-gray-400 mb-2">
          <button
            onClick={() => {
              const qid = currentQuestion?.id;
              if (qid && !viewedAnswers.includes(qid)) {
                setViewedAnswers([...viewedAnswers, qid]);
              }
              setVisible(true);
            }}
          >
            <Image
              src="/icons/view.png"
              width={20}
              height={20}
              alt="view answer"
            />
          </button>
        </div>

        <div className="text-lg font-semibold mb-6 text-center">
          {loading ? "Loading..." : error ? error : currentQuestion?.question}
        </div>

        <div className="space-y-4">
          {options.map((option, idx) => {
            let style =
              "bg-black border-gray-700 text-gray-300 hover:bg-gray-800";
            if (hasAnswered) {
              if (idx === selectedOptionIndex && idx === correctIndex)
                style = "bg-green-600 text-white";
              else if (idx === selectedOptionIndex && idx !== correctIndex)
                style = "bg-red-600 text-white";
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => {
                  if (!hasAnswered) {
                    setSelectedOptionIndex(idx);
                    setHasAnswered(true);
                  }
                }}
                className={`w-full text-left px-4 py-3 rounded-lg border ${style}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleLeaveQuiz}
            className="px-4 py-2 rounded-full bg-gray-700 text-white"
          >
            LEAVE
          </button>

          <button
            onClick={handleNextQuestions}
            disabled={loading || !!error || questions.length === 0}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white font-semibold"
          >
            {currentQuestionIndex === totalQuestions - 1 ? "RESULT" : "NEXT"}
          </button>
        </div>
      </div>

      {/* Result Modal */}
      {showResult && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl text-white max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Quiz Summary
            </h2>
            <p>Total Questions: {totalQuestions}</p>
            <p>Attempted: {attempted}</p>
            <p>Correct: {correct}</p>
            <p>Wrong: {wrong}</p>
            <p>Skipped: {skipped}</p>
            <p>Time Taken: {formatTime(secondsElapsed)}</p>
            <p className="text-green-400 font-bold mt-2">
              Final Score: {score.toFixed(2)}
            </p>
            <button
              onClick={() => setShowResult(false)}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
