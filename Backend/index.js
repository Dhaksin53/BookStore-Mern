import express, { request } from "express";
import {PORT,mongoDBUrl} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from "cors";

const app = express();
app.use(express.json());


// Middle ware for handling cors policy
// Option 1:Allow all origins with Default of cors(*)

app.use(cors());
// Option 2:Allow custom origind
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/' ,(request,response)=>{
    console.log(request);
    return response.status(234).send('Hi i am dhaksin ')

});
app.use('/books',booksRoute);



mongoose.connect(mongoDBUrl)
.then(()=>{
    console.log('App is connected to the database');
    app.listen(PORT,()=>{
    console.log(`app is listening to port: ${PORT}`);
    });
})
.catch(()=>{
    console.log(error);

})