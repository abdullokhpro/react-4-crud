import React, { useEffect, useState } from "react";
import "./card.scss";
import titleIcon from "../../assets/card/title-icon.png";
import githubCion from "../../assets/card/github-icon.png";
import documentIcon from "../../assets/card/document-icon.png";
import { CiEdit } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import ProductDetail from "../product-detail/ProductDetail";

const Card = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [birth, setBirth] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  const [product, setProduct] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      id: new Date().getTime(),
      fname: fname,
      lname: lname,
      age: +birth,
      tel: tel,
      address: address,
      gender: "male",
    };

    setData((prev) => [...prev, user]);
  };

  const handleSubmitDelete = (id) => {
    let filterSubmitData = data?.filter((user) => user.id !== id);
    setData(filterSubmitData);
  };

  const userItems = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__top">
        <div className="product__card__intro">
          <div className="product__card__main-icon">
            <img src={titleIcon} alt="" />
          </div>
          <div className="product__card__fullname">
            <p>
              {el.fname} {el.lname} <span>created a repository</span>
            </p>
            <span>15 hours ago</span>
          </div>
        </div>
        <div className="product__card__github">
          <img src={githubCion} alt="" />
        </div>
      </div>
      <div className="product__card__bottom">
        <div className="product__card__content">
          <img src={documentIcon} alt="" />
          <p className="product__card__info">{el.age}</p>
        </div>
        <div className="product__card__content">
          <img src={documentIcon} alt="" />
          <p className="product__card__info">{el.tel}</p>
        </div>
        <div className="product__card__content">
          <img src={documentIcon} alt="" />
          <p className="product__card__info">{el.address}</p>
        </div>
        <div className="product__card__content">
          <img src={documentIcon} alt="" />
          <p className="product__card__info">{el ? el.gender : "female"}</p>
        </div>
      </div>

      <div className="product__card__changes">
        <button
          onClick={() => handleSubmitDelete(el.id)}
          className="product__card__delete"
        >
          <MdDelete className="product__card__delete__icon" />
        </button>
        <button className="product__card__edit">
          <CiEdit className="product__card__edit__icon" />
        </button>
        <button onClick={() => setProduct(el)} className="product__card__more">
          <CiCircleMore className="product__card__more__icon" />
        </button>
      </div>
    </div>
  ));

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, []);

  return (
    <>
      <section className="card">
        <div className="container">
          <h2 className="title">Create Your Own Profile</h2>

          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form__input"
              onChange={(event) => setFname(event.target.value)}
              type="text"
              placeholder="Your first name"
              required
            />
            <input
              className="form__input"
              onChange={(event) => setLname(event.target.value)}
              type="text"
              placeholder="Your last name"
              required
            />
            <input
              className="form__input"
              onChange={(event) => setBirth(event.target.value)}
              type="number"
              placeholder="Your birth date"
            />
            <input
              className="form__input"
              onChange={(event) => setTel(event.target.value)}
              type="tel"
              placeholder="Your tel number"
            />
            <input
              className="form__input"
              onChange={(event) => setAddress(event.target.value)}
              type="text"
              placeholder="Your address"
            />
            <select className="form__select" id="form__select">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button className="form__btn">Create</button>
          </form>

          <div className="product">{userItems}</div>
        </div>
      </section>
      {product ? <ProductDetail data={product} close={setProduct} /> : <></>}
    </>
  );
};

export default Card;
