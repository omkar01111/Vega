import {app} from './app.js';
import { connectDb } from "./data/database.js";




connectDb();
//app listen
app.listen(process.env.PORT,()=>{
    console.log(`server listening on http://localhost:${process.env.Port}`);
})