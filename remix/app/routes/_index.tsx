import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Remix Boilerplate" },
  { name: "description", content: "Built with Remix" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ message: "Hello from Remix loader!" });
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Remix Boilerplate</h1>
      <p className="text-gray-500 dark:text-gray-400">{message}</p>
      <p className="text-sm text-gray-400">
        Edit <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">app/routes/_index.tsx</code>
      </p>
    </main>
  );
}
