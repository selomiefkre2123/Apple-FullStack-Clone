import { Routes, Route, Link } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";

import Header from "./Components/Navbar/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Mac from "./Pages/Mac";
import Iphone from "./Pages/Iphone";
import Ipad from "./Pages/Ipad";
import Watch from "./Pages/Watch";
import Tv from "./Pages/Tv";
import Music from "./Pages/Music";
import Support from "./Pages/Support";
import Cart from "./Pages/Cart";
import SharedLayout from "./Pages/SharedLayout";
import NotFound from "./Pages/NotFound";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:pid" element={<SingleProduct />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
