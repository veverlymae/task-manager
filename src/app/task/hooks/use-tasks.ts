"use client";

import { useState } from "react";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return { tasks, addTask, toggleTask };
}
