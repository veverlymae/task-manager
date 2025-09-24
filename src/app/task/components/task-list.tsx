"use client";

import TaskItem from "./task-item";
import { Task } from "@/app/task/hooks/use-tasks";

type Props = {
  tasks: Task[];
  onToggleAction: (id: number) => void;
};

export default function TaskList({ tasks, onToggleAction }: Props) {
  return (
    <ul className="mt-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleAction={onToggleAction} />
      ))}
    </ul>
  );
}
