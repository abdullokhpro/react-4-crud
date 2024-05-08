import React from "react";
import { IoMdExit } from "react-icons/io";

import "./productDetail.scss";

const ProductDetail = ({ data, close }) => {
  return (
    <div className="production">
      <div onClick={() => close(null)} className="production__overlay"></div>
      <div className="production__detail">
        <button className="production__detail__exit">
          <IoMdExit
            onClick={() => close(null)}
            className="production__exit__icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
