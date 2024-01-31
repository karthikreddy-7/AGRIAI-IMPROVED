import React from "react";
import { useState } from "react";
export default function Model3() {
  const crops = [
    "Rice",
    "Grape",
    "Apple",
    "Corn",
    "Potato",
    "Sugarcane",
    "Tomato",
  ];
  const [selectedCrop, setSelectedCrop] = useState("Select Crop");
  const [isOpen, setIsOpen] = useState(false);

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    setIsOpen(false);
  };
  return (
    <div className="flex items-start justify-center h-screen w-full ">
      <div className="flex flex-col p-6 bg-green-700  min-h-[80vh] min-w-[90vw] rounded-xl  items-stretch gap-8">
        <div className="text-2xl text-white font-extrabold m-4 flex justify-center">
          DISEASE DETECTION SYSTEM
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <div className="dropdown dropdown-hover p-8">
              <div
                tabIndex="0"
                role="button"
                onClick={() => setIsOpen(!isOpen)}
                className="btn m-1 w-64"
              >
                {selectedCrop}
                <div>
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {isOpen && (
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-40"
                >
                  {crops.map((crop) => (
                    <li key={crop}>
                      <a onClick={() => handleCropSelect(crop)}>{crop}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-52 p-12 mb-4 border-2 border-green-700 border-dashed rounded-lg cursor-pointer bg-green-300 hover:bg-green-400"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-black-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-black-900">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-black-500 dark:text-black-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div
            className="btn btn-square btn-ghost text-base mt-6 font-bold text-white w-80 h-16 flex justify-center items-center rounded-md"
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
