import Link from "next/link";
import Buttons from "../admin/button";

export default async function Dashboard() {
  console.log("Is this a server or client component?");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Welcome to your dashboard. Here you can view and manage your data.
        </p>
        <Buttons />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/admin"
        >
          Go to Admin Page
        </Link>
      </footer>
    </div>
  );
}
