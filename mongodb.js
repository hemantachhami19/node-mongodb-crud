const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';
MongoClient.connect(connectionUrl, {useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database",error);
    }
   console.log('connected successfully')
});