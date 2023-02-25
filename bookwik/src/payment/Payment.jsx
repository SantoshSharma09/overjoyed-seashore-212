import React from "react";
import { useState } from "react";
import "./Payment.css";
import img1 from "../assets/card_img.png";
import Loading from "./Loading";
import Otp from "./Otp";
import { Navigate } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";

function Payment() {
  const [loading, setLoding] = useState(false);
  const [pay, setPay] = useState(false);

  const handleClick = () => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
      setPay(true);
    }, 4000);
  };

  if (pay) {
    return <Otp />;
  }

  {
    if (loading) {
      return <Loading />;
    }
  }

  return (
    <div>
      <div class="container">
        <form action="">
          <div class="row">
            <div class="col col1">
              <h3 class="title">Billing Address</h3>

              <div class="inputBox">
                <span>Full Name :</span>
                <input type="text" placeholder="john deo" />
              </div>
              <div class="inputBox">
                <span>Email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div class="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div class="inputBox">
                <span>City :</span>
                <input type="text" placeholder="mumbai" />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>State :</span>
                  <input type="text" placeholder="india" />
                </div>
                <div class="inputBox">
                  <span>Zip Code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>

            <div class="col col2">
              <h3 class="title">Payment</h3>

              <div class="inputBox">
                <span>Cards Accepted :</span>
                <img src={img1} alt="" />
              </div>
              <div class="inputBox">
                <span>Name on Card :</span>
                <input type="text" placeholder="mr. john deo" />
              </div>
              <div class="inputBox">
                <span>Credit Card Number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div class="inputBox">
                <span>Exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>Exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div class="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Proceed to Payment"
            class="submit-btn"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Payment;
