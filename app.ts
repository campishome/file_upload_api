import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const app = express();
app.use(
    cors({
      origin: "*",
    })
  );
  
app.get('/',(req,res)=>{
    res.send('file_upload_api')
})
  
app.use(bodyParser.json());


module.exports = app;