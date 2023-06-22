import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Navbar,
  Projects,
  Header,
  About,
  Footer,
} from "./components/Components";
import DarkModeToggle from "../DarkMode";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <DarkModeToggle />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
