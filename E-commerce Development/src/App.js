import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import ProductPage from "./Page/ProductPage";
import Product1 from "./Page/product1";
import Product2 from "./Page/Product2";
import Product3 from "./Page/Product3";
import Product4 from "./Page/Product4";
import Product5 from "./Page/Product5";
import Product6 from "./Page/Product6";
import Product7 from "./Page/Product7";
import Product8 from "./Page/Product8";
import Product9 from "./Page/Product9";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
        <Route path="/product5" element={<Product5 />} />
        <Route path="/product6" element={<Product6 />} />
        <Route path="/product7" element={<Product7 />} />
        <Route path="/product8" element={<Product8 />} />
        <Route path="/product9" element={<Product9 />} />
      </Routes>
    </div>
  );
}
