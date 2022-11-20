const express=require('express');
const date=require('date-format');

const app=express();
const port=4000;

app.get('/',(req,res)=>{
    console.log(req.params[0]);
    res.status(200).send("<button >click me</button>");

});

app.get('/api/v1/:token/abc',(req,res)=>{
    console.log(req.params.token)
    res.send({param:req.params.token})
})

app.get('/api/v1/instagram',(req,res)=>{
    
    const instasocial={
        username:"nil_for_u_",
        followers:237,
        following:264,
        date:date("dd-MM-yy===hh:mm:ss",new Date()),

    }
    res.status(200).json({instasocial});
})

app.listen(port,()=>{
    console.log("fuck yeah");
});