import Link from "next/link";
import { notFound } from "next/navigation";

async function fetchUsers(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    return null;
    // throw new Error("Failed to fetch users");
  }
  const users = await response.json();
  return users;
}

export default async function UserPath({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUsers(userId);

  if (!user) {
    notFound();
  }
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-sm text-gray-600">
          This is the user page for {user.name}. You can manage your application user here.
        </p>
        <div className="grid grid-rows-[20px_1fr_20px] gap-2">
          <p className="text-sm text-gray-600">
            ID: <span className="text-gray-300">{user.id}</span>{" "}
          </p>
          <p className="text-sm text-gray-600">
            Username: <span className="text-gray-300">{user.username}</span>{" "}
          </p>
          <p className="text-sm text-gray-600">
            Email: <span className="text-gray-300">{user.email}</span>{" "}
          </p>
          <p className="text-sm text-gray-600">
            Phone: <span className="text-gray-300">{user.phone}</span>{" "}
          </p>
          <p className="text-sm text-gray-600">
            Website: <span className="text-gray-300">{user.website}</span>{" "}
          </p>
          <p className="text-sm text-gray-600">
            Company: <span className="text-gray-300">{user.company.name}</span>{" "}
          </p>
          <p className="text-sm text-gray-600">
            Address:{" "}
            <span className="text-gray-300">
              {user.address.street}, {user.address.city}
            </span>{" "}
          </p>
        </div>

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
