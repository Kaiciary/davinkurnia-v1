import Navbar from "./pages/navbar";
import Homepage from "./pages/home";
import Service from "./pages/resume";
import Works from "./pages/works";
import Header from "./pages/header";

const Home: React.FC= () => {
  return (
    <div>
      <Header></Header>
      <Homepage></Homepage>
      <Service></Service>
      <Works></Works>
    </div>
  );
}

export default Home;