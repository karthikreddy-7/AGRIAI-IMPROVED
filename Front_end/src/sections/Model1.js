import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    N: null,
    P: null,
    K: null,
    temperature: null,
    humidity: null,
    ph: null,
    Rainfall: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const mappedName = {
      Nitrogen: "N",
      Phosporus: "P",
      Potassium: "K",
      Temperature: "temperature",
      Humidity: "humidity",
      Ph: "ph",
      Rainfall: "rainfall",
    };
    const mappedKey = mappedName[name];
    setFormValues({ ...formValues, [mappedKey]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="flex items-start justify-center h-screen w-full ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-6 bg-green-700  min-h-[80vh] min-w-[90vw] rounded-xl  items-stretch gap-8">
          <div className="text-2xl text-white font-extrabold m-4 flex justify-center">
            CROP RECOMMENDATION SYSTEM
          </div>
          <div className="grid grid-cols-3 gap-8">
            <input
              type="number"
              id="Nitrogen"
              name="Nitrogen"
              placeholder="Enter Nitrogen"
              className="input input-bordered input-success w-full max-w-xs"
              required
              step="0"
              onChange={handleInputChange}
            />
            <input
              type="number"
              id="Phosporus"
              name="Phosporus"
              placeholder="Enter Phosphorus"
              className="input input-bordered input-success w-full max-w-xs"
              required
              step="0"
              onChange={handleInputChange}
            />
            <input
              type="number"
              id="Potassium"
              name="Potassium"
              placeholder="Enter Potassium"
              className="input input-bordered input-success w-full max-w-xs"
              required
              step="0"
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <input
              type="number"
              step="0.01"
              id="Temperature"
              name="Temperature"
              placeholder="Enter Temperature in °C"
              className="input input-bordered input-success w-full max-w-xs"
              required
              onChange={handleInputChange}
            />
            <input
              type="number"
              step="0.01"
              id="Humidity"
              name="Humidity"
              placeholder="Enter Humidity in %"
              className="input input-bordered input-success w-full max-w-xs"
              required
              onChange={handleInputChange}
            />
            <input
              type="number"
              step="0.01"
              id="Ph"
              name="Ph"
              placeholder="Enter pH value"
              className="input input-bordered input-success w-full max-w-xs"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <input
              type="number"
              step="0.01"
              id="Rainfall"
              name="Rainfall"
              placeholder="Enter Rainfall in mm"
              className="input input-bordered input-success w-full max-w-xs"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              className="btn btn-square btn-ghost text-base m-3 font-bold text-white w-80 h-16 flex justify-center items-center rounded-md"
              style={{
                background: "linear-gradient(to right, #00441b, #00a74a)",
              }}
            >
              Get Recommendations
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function ResultCard({ result, onBack }) {
  return (
    <div className="flex items-start justify-center h-screen w-full ">
      <div className="flex flex-col p-6 bg-green-700  min-h-[80vh] min-w-[90vw] rounded-xl  items-stretch gap-8">
        <div className="text-2xl text-white font-extrabold m-4 flex justify-center">
          CROP RECOMMENDATION SYSTEM
        </div>

        <div className="flex flex-row justify-center items-center">
          <div>{result}</div>
          <button
            className="btn btn-square btn-ghost text-base m-3 font-bold text-white w-80 h-16 flex justify-center items-center rounded-md"
            style={{
              background: "linear-gradient(to right, #00441b, #00a74a)",
            }}
            onClick={onBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

const Model1 = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://karthikcropapi.onrender.com/predict",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      const data = await response.json();
      setTimeout(() => {
        setResponse(data.result);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setResponse(null);
  };

  return (
    <div className="flex items-start justify-center h-screen w-full ">
      {loading ? (
        <div className="flex flex-col p-6 bg-green-700 min-h-[80vh] min-w-[90vw] rounded-xl justify-center items-center gap-8">
          <span className="loading loading-spinner loading-lg text-green-100">
            hie
          </span>
        </div>
      ) : response ? (
        <ResultCard result={response} onBack={handleBack} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Model1;
