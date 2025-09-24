"use client";

import { useTasks } from "@/app/task/hooks/use-tasks";
import AddTaskForm from "@/app/task/components/add-task-form";
import TaskList from "@/app/task/components/task-list";

export default function TaskPage() {
  const { tasks, addTask, toggleTask } = useTasks();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      <div className="bg-white-900 p-6 rounded-lg shadow-lg border border-white-700">
        <AddTaskForm onAddAction={addTask} />
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onToggleAction={toggleTask} />
        ) : (
          <p className="text-gray-400 text-center mt-4">
            🎉 No tasks yet. Add your first one!
          </p>
        )}
      </div>
    </div>
  );
}
