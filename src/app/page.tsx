export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-20">
      <h1 className="text-4xl font-bold text-white mb-4">
        🚀 Welcome to Task Manager
      </h1>
      <p className="text-gray-400 mb-8">
        Use the sidebar to navigate between your <span className="font-semibold">Tasks</span>, 
        adjust <span className="font-semibold">Settings</span>, or view your <span className="font-semibold">Profile</span>.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="/task"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Go to Tasks
        </a>
        <a
          href="/settings"
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Settings
        </a>
      </div>
    </div>
  );
}
