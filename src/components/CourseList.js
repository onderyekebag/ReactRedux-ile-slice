import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/cartSlice";
const CourseList = () => {
  const dispatch = useDispatch();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2 className="basket-title">Sepetim</h2>
            <h4>Boş</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2 className="basket-title">Sepetim</h2>
          </header>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="container"
          >
            {cartItems.map((item, index) => {
              return <CourseItem key={index} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="footer-div">
              <h4>
                Toplam Tutar : <span>{total} ₺</span>
              </h4>
              <button onClick={() => dispatch(clearCart())}>Temizle</button>
            </div>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
