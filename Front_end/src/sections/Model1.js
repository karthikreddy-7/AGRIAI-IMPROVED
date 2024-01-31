import React from "react";

export default function Model1() {
  return (
    <div className="flex items-start justify-center h-screen w-full ">
      <div className="flex flex-col p-6 bg-green-700  min-h-[80vh] min-w-[90vw] rounded-xl  items-stretch gap-8">
        <div className="text-2xl text-white font-extrabold m-4 flex justify-center">
          CROP RECOMMENDATION SYSTEM
        </div>
        <div className="grid grid-cols-3 gap-8">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full max-w-xs"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div
            className="btn btn-square btn-ghost text-base m-3 font-bold text-white w-80 h-16 flex justify-center items-center rounded-md"
            style={{
              background: "linear-gradient(to right, #00441b, #00a74a)",
            }}
          >
            Get Recommendations
          </div>
        </div>
      </div>
    </div>
  );
}
