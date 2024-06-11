import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Project</h1>
      <Link href="/questions">Go to questions</Link>
    </div>
  );
}
