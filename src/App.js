import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./page/product/Product";
import Admin from "./Login/Index";
import Home from "./page/Home";
import User from "./page/User";
import AddProduct from "./page/product/AddProduct";
import CartProduct from "./page/product/CartProduct";
import IndexProduct from "./page/product/IndexProduct";
import SubProduct from "./page/product/subProduct";
import FormLogin from "./Login/FormLogin";
import FormSignUp from "./Login/FormSignUp";
import Pay from "./page/product/Pay";
// const Product = lazy(() => import("./page/product/Product"));
// const Admin = lazy(() => import("./Login/Index"));
// const Home = lazy(() => import("./page/Home"));
// const User = lazy(() => import("./page/User"));
// const AddProduct = lazy(() => import("./page/product/AddProduct"));
// const CartProduct = lazy(() => import("./page/product/CartProduct"));
// const IndexProduct = lazy(() => import("./page/product/IndexProduct"));
// const SubProduct = lazy(() => import("./page/product/subProduct"));
// const FormLogin = lazy(() => import("./Login/FormLogin"));
// const FormSignUp = lazy(() => import("./Login/FormSignUp"));
// const Pay = lazy(() => import("./page/product/Pay"));
function App() {
  return (
    <Routes>
      <Route path="signup" element={<FormSignUp />}></Route>
      <Route path="login" element={<FormLogin />}></Route>
      <Route path="admin" element={<Admin />}>
        <Route path="add-product/:id?" element={<AddProduct />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="user" element={<User />}>
          <Route path="add-user"></Route>
        </Route>
      </Route>
      <Route path="/" element={<Home />}>
        <Route path="showproduct" element={<IndexProduct />} />
        <Route path="subproduct/:id?" element={<SubProduct />} />
        <Route path="cart" element={<CartProduct />} />
        <Route path="pay" element={<Pay />} />
      </Route>
    </Routes>
  );
}

export default App;
