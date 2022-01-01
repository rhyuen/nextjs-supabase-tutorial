import initStripe from "stripe";
import { supabase } from "../../utils/supabase.js";

const handler = async (req, res) => {
    if(req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET){
        return res.status(401).send("Not authorized to use this endpoint.");
    }


    try{
        const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

        const customer =await stripe.customers.create({
            email: req.body.record.email
        });

        await supabase
            .from("profile")
            .update({
                stripe_customer: customer.id
            }).eq("id", req.body.record.id);

        
    
            


        res.send({
            message: `stripe customer created: ${customer.id}`
        });
    }catch(e){
        console.log(e);
    }
};

export default handler;