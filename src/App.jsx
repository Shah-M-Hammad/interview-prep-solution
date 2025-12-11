import React, { useMemo, useState } from "react";
import questions from "./data/questions.js";
import QuestionCard from "./components/QuestionCard.jsx";
import Results from "./components/Results.jsx";

function evaluateTheoryAnswer(answer, expectedKeywords) {
  const normalized = (answer || "").toLowerCase();
  let matches = 0;
  for (const k of expectedKeywords) {
    if (normalized.includes(k.toLowerCase())) matches++;
  }
  const score = expectedKeywords.length > 0 ? matches / expectedKeywords.length : 0;
  return {
    isCorrect: score >= 0.6,
    matchCount: matches,
    total: expectedKeywords.length,
    score: Number(score.toFixed(2)),
  };
}

export default function App() {
  const total = questions.length;
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => Array(total).fill(null));
  const [evaluations, setEvaluations] = useState(() => Array(total).fill(null));
  const [explanationsShown, setExplanationsShown] = useState(() => Array(total).fill(true));
  const [showResults, setShowResults] = useState(false);

  const progressPct = useMemo(() => {
    const answered = answers.filter((a) => a !== null && a !== "").length;
    return Math.round((answered / total) * 100);
  }, [answers, total]);

  const q = questions[current];

  function startQuiz() {
    setStarted(true);
  }

  function handleAnswerChange(value) {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = value;
      return next;
    });
  }

  function handleCheckAnswer() {
    const answer = answers[current];
    let evalResult = null;
    if (answer !== null && answer !== "") {
      if (q.type === "mcq") {
        evalResult = { isCorrect: Number(answer) === q.answerIndex };
      } else {
        evalResult = evaluateTheoryAnswer(answer, q.expectedKeywords || []);
      }
    }
    setEvaluations((prev) => {
      const next = [...prev];
      next[current] = evalResult;
      return next;
    });
    setExplanationsShown((prev) => {
      const next = [...prev];
      next[current] = true;
      return next;
    });
  }

  function handleNext() {
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResults(true);
    }
  }

  function handlePrev() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function restart() {
    setStarted(false);
    setCurrent(0);
    setAnswers(Array(total).fill(null));
    setEvaluations(Array(total).fill(null));
    setExplanationsShown(Array(total).fill(true));
    setShowResults(false);
  }

  if (!started) {
    return (
      <div className="container">
        <header className="header">
          <h1>Interview Prep Quiz</h1>
          <p>MCQs and theory questions with answers and explanations. Not a strict quiz.</p>
        </header>
      
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="container">
        <Results questions={questions} answers={answers} evaluations={evaluations} onRestart={restart} />
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Interview Prep Quiz</h1>
        <div className="progress">
          <div className="bar" style={{ width: `${progressPct}%` }} />
          <span className="progress-text">{progressPct}% complete</span>
        </div>
      </header>

      <div className="card">
        <div className="question-meta">
          <span>Question {current + 1} of {total}</span>
          <span className="badge">{q.category}</span>
          <span className="badge kind">{q.type.toUpperCase()}</span>
        </div>

        <QuestionCard
          question={q}
          answer={answers[current]}
          onAnswerChange={handleAnswerChange}
          showExplanation={explanationsShown[current]}
          evaluation={evaluations[current]}
        />

        <div className="actions">
          <button className="secondary" onClick={handlePrev} disabled={current === 0}>Previous</button>
          <button className="primary" onClick={handleCheckAnswer}>Check Answer</button>
          <button className="primary outline" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
