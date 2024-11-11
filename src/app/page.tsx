import Navbar from "./pages/navbar";
import Homepage from "./pages/home";
import Service from "./pages/resume";
import Works from "./pages/works";

const Home: React.FC= () => {
  return (
    <div>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Service></Service>
      <Works></Works>
    </div>
  );
}

export default Home;