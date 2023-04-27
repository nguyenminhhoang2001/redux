import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthProduct } from "../../featre/productSlice";
import ListProduct from "./ListProduct";
import Slice from "./Slice";
const IndexProduct = () => {
  const { product } = useSelector((state) => state.add);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fecthProduct());
  }, []);
  return (
    <div>
      <Slice />
      <ListProduct>{product}</ListProduct>
    </div>
  );
};

export default IndexProduct;
