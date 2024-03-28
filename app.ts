import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const app = express();
app.use(
    cors({
      origin: "*",
    })
  );
  
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('file_upload_api')
})

module.exports = app;