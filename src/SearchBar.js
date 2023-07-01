import React from "react";

export default function SearchBar({ update }) {
  let searchValue = "";

  return (
    <>
      <div className="flex items-center w-[80%] h-[60%] m-auto">
        <div className="flex space-x-1 w-[100%] h-[100%]">
          <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border-2 rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search City ..."
            onChange={(event) => {
              searchValue = event.target.value;
            }}
          />
          <button
            className="px-4 text-white bg-purple-600 rounded-full "
            onClick={() => {
              update(searchValue);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            
          </button>
        </div>
      </div>
    </>
  );
}
