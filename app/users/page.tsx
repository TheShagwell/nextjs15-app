import Link from "next/link";

export default async function Users() {

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Users Page</h1>
        <p className="text-sm text-gray-600">
          This is the users page. You can manage your application users here.
        </p>

        <ul>
          {users.map((user: { id: number; name: string; email: string }) => (
            <li key={user.id} className="text-sm text-gray-600">
              <Link href={`/users/${user.id}`} className="hover:underline">
                {user.name} - {user.email}
              </Link>
            </li>
          ))}
        </ul>

        <span>Manage Settings</span>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
