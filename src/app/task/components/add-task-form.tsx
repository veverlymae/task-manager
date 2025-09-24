"use client";

import { useState } from "react";

type Props = {
  onAddAction: (text: string) => void;
};

export default function AddTaskForm({ onAddAction }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddAction(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border px-2 py-1 rounded w-full"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task..."
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
}
