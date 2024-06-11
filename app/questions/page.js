import FetchedQuestions from "../components/FetchedQuestions";

export default async function Questions() {
  const res = await fetch(
    "https://robfrontend.github.io/host_api_nba_quiz/questions.json"
  );
  const data = await res.json();
  const questions = data.questions;
  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question) => (
        <FetchedQuestions question={question} key={question.question} />
      ))}
    </div>
  );
}
