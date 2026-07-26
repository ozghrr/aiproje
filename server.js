import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req,res)=>{
 const r = await fetch("https://openrouter.ai/api/v1/chat/completions",{
  method:"POST",
  headers:{
   "Authorization":"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",
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   model:"openai/gpt-3.5-turbo",
   messages:[{role:"user",content:req.body.message}]
  })
 });
 const d = await r.json();
 res.json({reply:d.choices[0].message.content});
});

app.listen(3000);