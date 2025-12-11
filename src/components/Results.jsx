import React, { useMemo } from "react";

export default function Results({ questions, answers, evaluations, onRestart }) {
  const totals = useMemo(() => {
    let mcqTotal = 0, mcqCorrect = 0, theoryTotal = 0, theoryCovered = 0;
    questions.forEach((q, i) => {
      const evaln = evaluations[i];
      if (q.type === "mcq") {
        mcqTotal += 1;
        if (evaln?.isCorrect) mcqCorrect += 1;
      } else {
        theoryTotal += 1;
        if (evaln?.isCorrect) theoryCovered += 1;
      }
    });
    return { mcqTotal, mcqCorrect, theoryTotal, theoryCovered };
  }, [questions, evaluations]);

  const overallCorrect = evaluations.filter((e) => e?.isCorrect).length;
  const total = questions.length;

  return (
    <div className="card">
      <h2>Results Summary</h2>
      <div className="summary-grid">
        <div className="summary-item">
          <div className="summary-value">{overallCorrect} / {total}</div>
          <div className="summary-label">Overall Score</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">{totals.mcqCorrect} / {totals.mcqTotal}</div>
          <div className="summary-label">MCQ Correct</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">{totals.theoryCovered} / {totals.theoryTotal}</div>
          <div className="summary-label">Theory Coverage</div>
        </div>
      </div>

      <h3>Review</h3>
      <ol className="review-list">
        {questions.map((q, i) => {
          const evaln = evaluations[i];
          const ans = answers[i];
          const isCorrect = !!evaln?.isCorrect;
          return (
            <li key={i} className="review-item">
              <div className="question-meta">
                <span className="badge">{q.category}</span>
                <span className="badge kind">{q.type.toUpperCase()}</span>
                <span className={"result-tag " + (isCorrect ? "correct" : "incorrect")}>{isCorrect ? "Correct" : "Needs improvement"}</span>
              </div>
              <div className="question-text">{q.question}</div>

              {q.type === "mcq" ? (
                <div className="answer-row">
                  <strong>Your answer:</strong> {typeof ans === "number" ? q.options[ans] : "—"}
                </div>
              ) : (
                <div className="answer-row">
                  <strong>Your answer:</strong>
                  <p className="user-answer">{ans || "—"}</p>
                  {evaln && (
                    <div><em>Keyword match:</em> {evaln.matchCount} / {evaln.total} ({evaln.score})</div>
                  )}
                </div>
              )}

              {q.type === "mcq" && (
                <div className="answer-row"><strong>Correct answer:</strong> {q.options[q.answerIndex]}</div>
              )}

              {q.type === "theory" && q.modelAnswer && (
                <div className="answer-row">
                  <strong>Model answer:</strong>
                  <p>{q.modelAnswer}</p>
                </div>
              )}

              {q.explanation && (
                <div className="answer-row">
                  <strong>Explanation:</strong>
                  <p>{q.explanation}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="actions">
        <button className="primary" onClick={onRestart}>Restart Quiz</button>
      </div>
    </div>
  );
}
