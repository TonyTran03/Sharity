import { MongoClient } from "mongodb";

export default async function handler(req, res){

    if(req.method === "GET"){
        const client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })


        try{
            await client.connect();
            const db = client.db("donation");

            const collection = db.collection("inventory")

    
    
        }
        catch{
            res.status(500).json({message:"something went wrong"})
        }

        finally{
            await client.close();
        }

    }


  

    else{
        res.status(405).json({ message: "Method not allowed!" });
    }
}