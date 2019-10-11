const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionUrl, {useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database",error);
    }
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name:'Hemant',
    //     age:'26'
    // },(error,result)=>{
    //     if(error){
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    // });

    var userArray = [
        {
            name: 'Ram',
            age: 26
        },
        {
            name: 'Ram',
            age: 26
        }
    ];
    db.collection('users').insertMany(userArray,(error,result)=>{
        if(error){
            return console.log("Unable to insert users");
        }
        console.log(result.ops);
    });
});