//Dependencies 
const express= require("express");
// const apiRoute= require("./routes/apiRoutes");
const htmlRoute=require("./routes/htmlRoutes");
const app=express();
const PORT= process.env.PORT || 3000;


// app.use("/api", apiRoute);
app.use("/", htmlRoute);













app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))