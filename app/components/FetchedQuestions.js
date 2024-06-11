"use client";

export default function FetchedQuestions({ question }) {
  return (
    <div>
      <h2>Question: {question.question}</h2>
      <p>Points: {question.points}</p>
    </div>
  );
}
