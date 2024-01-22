import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import bgheader from "./assets/img/bgheader.jpg";

function App() {
  return (
    <>
      <div className="bg-black-100">
        <div className="fixed inset-0 overflow-hidden">
          <img
            src={bgheader}
            className="w-full h-full object-cover"
            alt="Background Header"
          />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default App;
