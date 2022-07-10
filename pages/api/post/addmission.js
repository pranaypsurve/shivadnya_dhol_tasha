// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../helpers/connectDB';
import Addmission from '../../../models/Addmission';

export default async function handler(req, res) {
  const {method , body } = req;
  console.log(body);
  if(method === "POST"){
      await dbConnect();
      var data = new Addmission(body);
      try {
            data.save((err,doc)=>{
              if (!err){
                res.status(200).json({ success: true, data: doc })
              }
          });
          } catch (error) {
            res.status(400).json({ success: false })
          }
  }else{
    res.status(200).json({ success: false, data: 'Wrong method GET' })
  }

}
