import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Benefit from "./components/Benefit";

function App() {
  return (
    <>
      {/* <h1 className="text-2xl flex justify-center">Welcome</h1> */}
      <Navbar />
      <LandingPage />
      <Details />
      <Benefit />
    </>
  );
}

export default App;
