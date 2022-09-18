import mongoose from 'mongoose';
import { categorySeeder } from './categorySeeder.js';
import { productSeeder} from "./productSeeder.js";
import dotenv from 'dotenv';
dotenv.config();

 export class MongoConnect {
    constructor() {
        this.mongoURL = process.env.MONGODB_URI
        mongoose.connect(this.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async runSeeder() {
        //await categorySeeder();
        await productSeeder();
    }

    mongoDisconnect() {
        console.log('Press Ctrl+C to exit.')
        //process.exit(1);
    }
}