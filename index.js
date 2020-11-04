const app = require('./app');
const fileUploadRouter = require('./controllers/files');


app.get("/health",async (req,res)=>{
    res.status(200)
    .json({
        message:"Up and running"
    })
});

app.use('/api/upload',fileUploadRouter);


const server = app.listen(8080,()=>{
    console.log("listening on port 8080");
})