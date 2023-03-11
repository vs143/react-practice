import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Insta from "./Component/Insta";
import Mail from "./Component/Mail";
import Error from "./Component/Error";
import Userdetails from "./Component/Userdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from "./Component/UserState";
import CONTEX from "./Component/CONTEX";
import CompA from "./Component/CompA";
import CompB from "./Component/CompB";
import CompC from "./Component/CompC";
import UseRefernce from "./Component/Refernce";
import UseReduse from "./Component/UseReduse";
import CustomHooks from "./Component/CustomHooks";
import UseMomo from "./Component/UseMomo";
import Loaders from "./Component/Loaders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Userdetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="gmail" element={<Mail />} />
          </Route>
          <Route path="/state" element={<UserState />} />
          <Route path="/CONTEX" element={<CONTEX />}>
            <Route index element={<CompA />} />
            <Route path="compA" element={<CompA />} />
            <Route path="compB" element={<CompB />} />
            <Route path="compC" element={<CompC />} />
          </Route>
          <Route path="/refernce" element={<UseRefernce />} />
          <Route path="/UseReduse" element={<UseReduse />}>
            <Route path="custom" element={<CustomHooks />}>
              <Route path="UseMomo" element={<UseMomo />}/>
            </Route>
          </Route>
          <Route path="Loaders" element={<Loaders/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
