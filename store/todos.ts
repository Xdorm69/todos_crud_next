import {create} from 'zustand';


interface todoIn {
  id: number;
  title: string;
  desc: string;
}
const TodosToAdd: todoIn[] = [
  { id: 1, title: "Go to gym", desc: "I will go to gym at 5pm" },
  { id: 2, title: "Buy milk", desc: "I need to buy milk from the store" },
  {
    id: 3,
    title: "Walk the dog",
    desc: "I need to walk the dog in the morning",
  },
  { id: 4, title: "Do laundry", desc: "I need to do laundry on the weekend" },
  {
    id: 5,
    title: "Clean the room",
    desc: "I need to clean my room before my mom comes",
  },
  {
    id: 6,
    title: "Buy a new book",
    desc: "I've been wanting to read a new book for a long time",
  },
  { id: 7, title: "Call mom", desc: "I need to call my mom back" },
  {
    id: 8,
    title: "Buy groceries",
    desc: "I need to buy groceries for the week",
  },
];

export const useTodos = create<{todos: {id: number,title: string, desc: string}[], setTodos: (newTodos: {id: number,title: string, desc: string}[]) => void}>((set) => ({
    todos: TodosToAdd,
    setTodos: (newTodos) => set(() => ({
        todos: newTodos
    }))
}))