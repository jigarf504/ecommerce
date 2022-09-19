import {Stripe} from "stripe";
import dotenv from "dotenv";
import orderModel from "../Models/order.model.js";
dotenv.config()
export const generateSession = async (req,res) => {
    try {
        const YOUR_DOMAIN = process.env.APP_BASE_URL;
        const stripeObj  = new Stripe(process.env.STRIPE_APP_SECRET_KEY)
        const {cart_data} = req.body
        let total = 0
        let line_items = [];
        for(let cart of cart_data) {
            total += +cart.qty * +cart.price
            line_items.push({
                price_data:{
                    product_data : {name:cart.name},
                    currency: "INR",
                    unit_amount: cart.price * 100
                },
                quantity:cart.qty
            })
        }

        const order = await orderModel.create({
            user_id:"sdfsfs",
            total,
            payment_status: "Initiated",
            order_date: new Date().toISOString(),
            order_lines: cart_data,
        })

        const session = await stripeObj.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success?session_id=${order._id}`,
            cancel_url: `${YOUR_DOMAIN}/cancel?session_id=${order._id}`,
        })

        await orderModel.findByIdAndUpdate(order._id, {
          session_id: session.id,
        });
        res.status(200).json({message:"payment session is generated successfully.!",session});
    } catch(err) {
        res.status(500).json({ message: "Something went wrong!", error: err.message  });
    }


}

export const updateOrderStatus = async (req,res) => {
    try {
        const {session_id,payment_status} = req.body
        const isOrderUpdate = await orderModel.findByIdAndUpdate(session_id,{payment_status})
        if (isOrderUpdate) {
            res.status(200).json({ message: "Your order successfully placed", status:true, order:isOrderUpdate});
        } else {
            res.status(200).json({ message: "Something went wrong!", status: false});
        }
    } catch(err) {
        res.status(500).json({ message: "Something went wrong!", error: err.message  });
    }
}