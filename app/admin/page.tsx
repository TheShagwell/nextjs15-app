"use client";

import Link from "next/link";

export default function Admin() {
  console.log("Is this a server or client component?");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Admin Page</h1>
        <p className="text-sm text-gray-600">
          This is the admin page. You can manage your application here.
        </p>
        <Link href="/settings">Manage Settings</Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="/"
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
