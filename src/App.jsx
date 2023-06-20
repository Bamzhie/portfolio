import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Navbar,
  Projects,
  Header,
  About,
  Footer,
} from "./components/Components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Navbar />
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
