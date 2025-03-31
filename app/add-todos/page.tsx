"use client";
import { useTodos } from "@/store/todos";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const TodoPage = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const alltodos = useTodos((state) => state.todos);
  const setTodos = useTodos((state) => state.setTodos);

  const submitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ title, desc });
    if(title == ''){
      toast.error("Title cannot be empty");
      return
    }
    else if(desc == ''){
      toast.error("Desc cannot be empty");
      return;
    }

    // Create new todo with unique ID
    const newTodo = {
      id: Date.now(), // Using timestamp to ensure unique ID
      title,
      desc,
    };

    // Update todos in store
    setTodos([...alltodos, newTodo]);

    // Reset form
    setTitle("");
    setDesc("");

    toast.success("Submitted Successfully!!");
    redirect("/");
  };
  return (
    <div className="py-10 h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-full flex-col">
          <div className="bg-white p-4 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-black">Add todo</h1>
            <form onSubmit={submitTodo} className="flex flex-col gap-4">
              <label htmlFor="title">
                <h1 className="font-semibold text-xl mt-4">Title</h1>
                <input
                  className="bg-gray-400 p-2 border-none focus:outline-none text-white rounded-md  mt-2 min-w-[400px]"
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
                  className="bg-gray-400 p-2 border-none focus:outline-none text-white rounded-md  mt-2 min-w-[400px]"
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
