import express from 'express';

const app = express();

app.use("/test",(req,res)=>{
    res.send("Welcome to the Express Server!");
});

app.listen(3000, () => console.log('Server running on port 3000'));