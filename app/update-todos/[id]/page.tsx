"use client";
import { useTodos } from "@/store/todos";
import { redirect, useParams } from "next/navigation";
import { useState, useEffect } from "react";

// Client component for form handling
export default function UpdateTodoPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const todos = useTodos((state) => state.todos);
  const setTodos = useTodos((state) => state.setTodos);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Initialize form with existing todo data
  useEffect(() => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setTitle(todo.title);
      setDesc(todo.desc);
    }
  }, [todos, id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    // Create updated todo
    const updatedTodo = {
      ...todo,
      title,
      desc,
    };

    // Update todos in store
    const updatedTodos = todos.map((t) => (t.id === id ? updatedTodo : t));
    setTodos(updatedTodos);

    // Redirect back to home
    redirect("/");
  };

  return (
    <div className="py-10 h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-full flex-col">
          <div className="bg-white p-4 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-black">Update todo</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="title">
                <h1 className="font-semibold text-xl mt-4">Title</h1>
                <input
                  className="bg-gray-400 p-2 border-none focus:outline-none text-white rounded-md mt-2 min-w-[400px]"
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                />
              </label>

              <label htmlFor="desc">
                <h1 className="font-semibold text-xl">Description</h1>
                <input
                  className="bg-gray-400 p-2 border-none focus:outline-none text-white rounded-md mt-2 min-w-[400px]"
                  type="text"
                  name="desc"
                  id="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Enter description"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-400 mt-4 hover:bg-blue-600 p-2 text-white font-bold rounded-xl"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
