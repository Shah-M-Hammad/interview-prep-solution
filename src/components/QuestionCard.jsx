import React from "react";

export default function QuestionCard({ question, answer, onAnswerChange, showExplanation, evaluation }) {
  if (question.type === "mcq") {
    return (
      <div>
        <h2 className="question-text">{question.question}</h2>
        <div className="options">
          {question.options.map((opt, idx) => (
            <label key={idx} className={"option" + (Number(answer) === idx ? " selected" : "")}>
              <input
                type="radio"
                name="mcq"
                checked={Number(answer) === idx}
                onChange={() => onAnswerChange(idx)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
        {showExplanation && (
          <div className="explanation">
            <div className="answer-row">
              <strong>Correct answer:</strong> {question.options[question.answerIndex]}
            </div>
            {evaluation && (
              <div className={"result-tag " + (evaluation?.isCorrect ? "correct" : "incorrect") }>
                {evaluation?.isCorrect ? "You are correct." : "Not quite. Keep going!"}
              </div>
            )}
            {question.explanation && <p>{question.explanation}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="question-text">{question.question}</h2>
      <textarea
        className="theory-input"
        rows={6}
        placeholder="Type your answer here..."
        value={answer || ""}
        onChange={(e) => onAnswerChange(e.target.value)}
      />
      {showExplanation && (
        <div className="explanation">
          {evaluation && (
            <div className={"result-tag " + (evaluation?.isCorrect ? "correct" : "incorrect") }>
              {evaluation?.isCorrect ? "Good coverage of key points." : "Consider covering more key concepts."}
            </div>
          )}
          {evaluation && (
            <div className="answer-row">
              <strong>Keyword match:</strong> {evaluation.matchCount} / {evaluation.total} ({evaluation.score})
            </div>
          )}
          {question.modelAnswer && (
            <div className="answer-row">
              <strong>Model answer:</strong>
            </div>
          )}
          {question.modelAnswer && <p>{question.modelAnswer}</p>}
          {question.explanation && (
            <div className="answer-row">
              <strong>Explanation:</strong>
            </div>
          )}
          {question.explanation && <p>{question.explanation}</p>}
        </div>
      )}
    </div>
  );
}
