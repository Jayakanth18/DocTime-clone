import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Benefit from "./components/Benefit";
import Banner from "./components/Banner";
import { Clients } from "./components/Clients";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Details />
      <Benefit />
      <Banner />
      <Stats />
      <Clients />
      <Form />
      <Footer />
    </>
  );
}

export default App;
