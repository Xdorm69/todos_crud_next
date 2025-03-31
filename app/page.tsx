"use client";
import { useTodos } from "@/store/todos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const todos = useTodos((state) => state.todos);
  const setTodos = useTodos((state) => state.setTodos);

  const handleUpdate = (id: number) => {
    router.push(`/update-todos/${id}`);
  }

  const handleDelete = (id: number)  => {
    const fetchedTodos = [...todos];
    const filteredTodos = fetchedTodos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos);
    toast.success("Todo deleted successfully");
   }

  return (
    <main className="py-10 min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-5xl text-gray-600">Todos</h1>
          <Link href="/add-todos">
            <button className="bg-green-600 cursor-pointer hover:bg-green-300 transition p-2 rounded-xl shadow text-white text-2xl font-bold">
              Add todos
            </button>
          </Link>
        </div>

        <div className="bg-gray-200 rounded-xl w-full my-5 shadow p-2">
          {todos && todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-blue-200 rounded-xl p-4 shadow w-full my-3"
              >
                  <p>#{todo.id}</p>
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-2xl">{todo.title}</h1>
                  <div className="actions">
                    <button
                      onClick={() => handleUpdate(todo.id)}
                      className="bg-green-400 hover:bg-green-600 transition p-2 shadow rounded-xl text-white font-semibold"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="bg-red-400 hover:bg-red-600 transition p-2 shadow ml-2 rounded-xl text-white font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p>{todo.desc} </p>
              </div>
            ))
          ) : (
            <div className="py-10 font-semibold tracking-tight">
              No todos available
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
