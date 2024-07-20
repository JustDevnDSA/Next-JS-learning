"use client";

import TableHead from "@/components/TableHead";
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // storing todo data
  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    // by default axios hits get method
    const response = await axios("/api");
    setTodoData(response.data.todos);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });

    toast.success(response.data.msg);
    fetchTodos();
  };

  const completeTodo = async (id) => {
    const response = await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      }
    );

    toast.success(response.data.msg);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // activating the input fields
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((form) => ({ ...form, [name]: value }));

    // console.log(formData);
  };

  // handling the submit button
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);

      // clearing the input fields
      setFormData({
        title: "",
        description: "",
      });
      await fetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose="3300" />
      <form
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
          onChange={onChangeHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full "
          onChange={onChangeHandler}
          value={formData.description}
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <TableHead />
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  id={index}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
