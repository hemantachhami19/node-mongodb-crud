const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionUrl, {useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database",error);
    }
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name:'Hemant',
        age:'26'
    });
});