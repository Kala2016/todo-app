import React, { useState } from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="bg-transparent border-0 outline-none flex-1 ml-4 text-[17px]"
          />
        ) : (
          <p
            className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
              isComplete ? "line-through" : ""
            }`}
          >
            {text}
          </p>
        )}
      </div>
      {isEditing ? (
        <button
          onClick={handleSave}
          className="text-blue-500 cursor-pointer"
        >
          Save
        </button>
      ) : (
        <>
          <img
            onClick={handleEdit}
            src={edit_icon}
            alt="edit"
            className="w-3.5 cursor-pointer"
          />
          <img
            onClick={() => {
              deleteTodo(id);
            }}
            src={delete_icon}
            alt="delete"
            className="w-3.5 cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default TodoItems;
