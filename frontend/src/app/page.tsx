"use client";
import { useEffect, useState } from "react";
import { getHello } from "@/lib/api";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHello().then((data) => setMessage(data.message));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl text-neutral-950 font-bold">Next.js + FastAPI</h1>
      <p className="mt-4 text-lg text-blue-600">{message}</p>
    </main>
  );
}