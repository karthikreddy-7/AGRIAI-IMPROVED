import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import bgheader from "./assets/img/bgheader.jpg";

function App() {
  return (
    <>
      <div className="flex flex-row relative">
        <div className="relative">
          <div className="relative">
            <img
              src={bgheader}
              className="w-full h-full object-contain"
              alt="Background Header"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
            <div>AGRICULTURE</div>
            <div>& AI</div>
          </div>
          <div className="bg-green-100 rounded-xl shadow-md box-border h-16 w-11/12 absolute top-6 left-12">
            <NavBar />
          </div>
        </div>
      </div>
      <div>
        <button className="btn">hello</button>
      </div>
    </>
  );
}

export default App;
