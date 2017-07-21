let express=require('express');
let app=express();
app.listen(3000);
let homelist=require('./home/Home-List');
app.get('/api/home',(req,res)=>{
    res.send(homelist)
});
