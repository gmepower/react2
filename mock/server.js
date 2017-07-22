let express=require('express');
let app=express();
app.listen(3000);
let homelist=require('./home/Home-List');
app.get('/api/home',(req,res)=>{
    res.send(homelist)
});
let livelist=require('./live/Live-List');
app.get('/api/live',(req,res)=>{
    res.send(livelist)
})
let serieslist=require('./series/Series-List');
app.get('/api/series',(req,res)=>{
    res.send(serieslist)
})
let publiclist=require('./public/Public-List');
app.get('/api/public',(req,res)=>{
    res.send(publiclist)
})