import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p className="mt-2">Role: {user?.role}</p>

      <button
        onClick={logout}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
}
