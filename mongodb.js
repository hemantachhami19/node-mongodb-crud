const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionUrl, {useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database",error);
    }
    const db = client.db(databaseName);
    var taskArray = [
        {
            description : 'Clean the house',
            completed: false
        },
        {
            name: 'Buy book',
            completed: false
        }
    ];
    db.collection('tasks').insertMany(taskArray,(error,result)=>{
        if(error){
            return console.log("Unable to insert tasks");
        }
        console.log(result.ops);
    });
});