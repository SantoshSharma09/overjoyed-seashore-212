

const express = require("express");
const { CartModel } = require("../modals/cart.modal");
const cartRouter = express.Router();
const { middleware } = require("../middleware/middleware");



cartRouter.get("/", async (req, res) => {
  try {
    const cartdata = await CartModel.find();
    res.send(cartdata);
  } catch (err) {
    res.send({ msg: "Data is not present", error: err.message });
  }
});

cartRouter.post("/addtocart", middleware, async (req, res) => {
  try {
    let cart = new CartModel(req.body);
    //console.log(req.body)
    await cart.save();
    // console.log(ans)
    res.send("Added to cart");
  } catch (err) {
    res.send({ Msg: err.message });
  }
});
cartRouter.delete("/delete/:id", async (req,res)=>{
    const ID=req.params.id
    // res.send(ID)
   try
    {
       await BookModel.findByIdAndDelete({_id:ID})
       res.send({"msg":"Data Deleted"})
      }
    catch(err)
    {
        res.send({"msg":"Cannot Deleted", "error":err.message})
 
    }
 })

module.exports = { cartRouter };
