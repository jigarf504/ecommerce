import {MongoConnect} from './seed-config.js'

const run = new MongoConnect();
await run.runSeeder();
run.mongoDisconnect();

