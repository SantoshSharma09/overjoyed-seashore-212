import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

let data = [
  {
    id: 1,
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593655252_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    title: "Someone Else's Shoes",
    ratings: 5,
    price: 12.99,
    author: "by Jojo Moyes",
    description: "Someone Else's Shoes",
    category: "fiction",
  },
  {
    id: 2,
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593446423_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    title: "Maureen: A Harold Fry Novel     ",
    ratings: 4.5,
    price: 23.99,
    author: "by Rachel Joyce",
    description: " Maureen: A Harold Fry Novel ",
    category: "fiction",
  },
  {
    id: 3,
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781668024485_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    title:
      "Murder Your Employer: The McMasters Guide to Homicide (B&N Exclusive Edition)      ",
    ratings: 5,
    price: 22.99,
    author: "by Rupert Holmes",
    description:
      "Murder Your Employer: The McMasters Guide to Homicide (B&N Exclusive Edition)  ",
    category: "fiction",
  },
];
function Cartpage() {
  const [prod, setProd] = React.useState([]);
  const [count, setCount] = React.useState(1);

  let sum = 0;
  let arr = [];

  data.map((ele) => {
    arr.push(ele.price);
  });

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  //Fetching the data:
  const getProd = () => {
    axios
      .get(`http://localhost:8000/cart`)
      .then((res) => {
        console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getProd();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#3D5962",
          color: "white",
          padding: "10px 0px 10px 0px",
          fontSize: "18px",
        }}
      >
        Free Shipping on Orders of $40 or More
      </div>
      <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>
        <div
          style={{
            display: "flex",
            marginBottom: "40px",
          }}
          className="container"
        >
          <div style={{ width: "60%" }} className="left-container">
            <div style={{ marginBottom: "70px" }} className="description">
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "left",
                }}
              >
                The availability of one or more item in your Shopping Bag has
                changed.
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  paddingLeft: "10px",
                }}
              >
                Got Your Number: The Greatest Sports Legends and the Numbers
                They Own (Signed Book) is temporarily out of stock online.
              </p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "28px", fontWeight: "600" }}>
                <hr></hr>My Shopping Cart
              </h3>
            </div>
            <div
              style={{
                backgroundColor: "#3D6DB5",
                color: "white",
                padding: "10px 5px 10px 5px",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              You've got great taste, if we do say so ourselves.
            </div>
            <div>
              <div
                style={{
                  border: "1px solid grey",
                  textAlign: "left",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                    marginTop: "20px",
                    marginBottom: "50px",
                  }}
                >
                  {" "}
                  ({data.length}) Items from Barnes & Noble
                </p>
                {data.map((ele) => (
                  <div key={ele.id}>
                    <div>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {ele.title}
                      </p>
                      <p
                        style={{
                          marginBottom: "30px",
                          fontSize: "13px",
                        }}
                      >
                        {ele.author}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <div className="rate-div">
                        <img
                          style={{ width: "45%" }}
                          src={ele.image}
                          alt="image"
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        {" "}
                        <p style={{ marginRight: "10px", paddingTop: "8px" }}>
                          ${ele.price}
                        </p>
                        <div
                          style={{
                            paddingTop: "3px",
                            height: "40px",
                            width: "80px",
                            border: "1px solid grey",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <button
                            style={{
                              fontSize: "20px",
                              // paddingLeft: "5px",
                              // paddingRight: "5px",
                              // border: "1px solid grey",
                              textAlign: "left",
                              fontWeight: "600",
                            }}
                          >
                            -
                          </button>
                          <button
                            style={{
                              fontSize: "20px",
                              padding: "3px 10px 4px 10px",
                              fontWeight: "600",
                            }}
                          >
                            {count}
                          </button>

                          <button
                            style={{
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                          >
                            +
                          </button>
                        </div>
                        <p style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          ${ele.price * count}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "teal",
                        fontSize: "13px",
                        margin: "20px",
                      }}
                    >
                      <button>Remove</button>
                    </div>
                    <div style={{ marginBottom: "20px", fontSize: "13px" }}>
                      Choose Int'l Express*** at checkout for delivery by
                      Friday, March 3
                    </div>
                    <hr></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid grey",
              width: "35%",
              marginLeft: "20px",
              height: "650px",
              padding: "20px 20px 10px 20px",
              marginTop: "0px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  textAlign: "left",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Order Summary
              </h3>
              <div
                classNmae="subtotal"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: "15px", float: "left" }}>
                    Subtotal ({prod.length}{" "}
                    <span style={{ fontSize: "12px" }}>items</span>)
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  {" "}
                  <p>${sum}</p>
                </div>
              </div>{" "}
              <div
                classNmae="estimate"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: "15px", float: "left" }}>
                    Estimated Shipping
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  <p>${36.94}</p>
                </div>
              </div>{" "}
              <div
                classNmae="estimate-tax"
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: "15px", float: "left" }}>
                    Estimated Tax
                  </p>
                </div>
                <div style={{ width: "30%", float: "right" }}>
                  <p>${0.0}</p>
                </div>
              </div>
              <hr></hr>
              <div
                classNmae="order-total"
                style={{ display: "flex", marginTop: "15px" }}
              >
                <div style={{ width: "70%" }}>
                  <p
                    style={{
                      fontSize: "18px",
                      float: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Order Total:{" "}
                  </p>
                </div>
                <div
                  style={{ width: "30%", float: "right", fontWeight: "bold" }}
                >
                  <p>${sum + 36.94}</p>
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "#346250",
                  color: "white",
                  marginTop: "20px",
                  width: "100%",
                  fontSize: "18px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                CHECKOUT
              </button>
              <div style={{ fontSize: "12px", marginTop: "10px" }}>
                Or Checkout With
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{
                    width: "80%",
                  }}
                  src="https://www.barnesandnoble.com/static/redesign/srcs/images/masterpass/v3_MP_button_dark_290x48.svg"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "50px",
                gap: "10px",
                // backgroundColor: "smoke-white",
              }}
            >
              <div>
                <img
                  style={{ width: "120%" }}
                  src="https://img.images-bn.com/static/redesign/srcs/images/PremMemShipCard@2x.png"
                />
              </div>
              <div>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Have a B&N Membership?
                </span>{" "}
                <p style={{ fontSize: "12px" }}>
                  <span style={{ color: "green" }}>Sign In</span> and add your
                  member number to your account to start enjoying free Shipping
                  today!
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            marginTop: "40px",
            textAlign: "left",
            marginBottom: "30px",
          }}
          className="info"
        >
          <div>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Need Help?
            </h2>
            <p
              style={{ fontSize: "12px", color: "green", marginBottom: "5px" }}
            >
              Chat with a customer service representative
            </p>
            <p style={{ fontSize: "12px", color: "green" }}>
              Have more questions?
            </p>
          </div>
          <div>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              BN.com is Safe and Convenient
            </h2>
            <p
              style={{ fontSize: "12px", color: "green", marginBottom: "5px" }}
            >
              Return items within 30 days (14 days for NOOK) online or at any
              B&N store
            </p>
            <p style={{ fontSize: "12px", color: "green" }}>
              Safe Shopping Guarantee at BN.com{" "}
            </p>
          </div>
          <div
            style={{
              paddingLeft: "30px",
              display: "grid",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <img
                style={{
                  width: "40%",
                }}
                src="data:image/png;base64,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"
              />
            </div>

            <p style={{ fontSize: "12px", fontWeight: "bold" }}>
              How SSL Secures You
            </p>
          </div>
        </div>
        <hr></hr>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            fontSize: "12px",
            color: "green",
            marginBottom: "50px",
          }}
        >
          <p>Terms of Use</p>
          <p>Copyright & Trademark</p>
          <p>Privacy</p>
          <p>Do Not Sell My Personal Information</p>
          <p>Accessibility</p>
          <p>Cookie Policy</p>
          <p style={{ width: "25%", color: "black", fontSize: "11px" }}>
            © 1997-2023 Barnes & Noble Booksellers, Inc. 33 East 17th Street,
            New York, NY 10003
          </p>
        </div>
      </div>
    </>
  );
}

export default Cartpage;
