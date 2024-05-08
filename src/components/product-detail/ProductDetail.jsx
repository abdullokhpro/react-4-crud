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

        <div className="production__content">
          <p className="production__info">
            <span>Name:</span> {data.fname}
          </p>
          <p className="production__info">
            <span>Surname:</span> {data.lname}
          </p>
          <p className="production__info">
            <span>Age:</span> {data.age}
          </p>
          <p className="production__info">
            <span>Tel:</span> {data.tel}
          </p>
          <p className="production__info">
            <span>Address:</span> {data.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
