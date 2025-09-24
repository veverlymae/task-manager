"use client";

import { Task } from "@/app/task/hooks/use-tasks";

type Props = {
  task: Task;
  onToggleAction: (id: number) => void;
};

export default function TaskItem({ task, onToggleAction }: Props) {
  return (
    <li
      className="flex justify-between items-center p-2 border-b cursor-pointer"
      onClick={() => onToggleAction(task.id)}
    >
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.text}
      </span>
    </li>
  );
}
