const {MongoClient, ObjectID} = require('mongodb');
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database", error);
    }
    const db = client.db(databaseName);

    let taskArray = [
        {
            description: 'Clean the house',
            completed: false
        },
        {
            name: 'Buy book',
            completed: false
        }
    ];

    /*==========
        CREATE
     ===========*/
    db.collection('tasks').insertMany(taskArray, (error, result) => {
        if (error) {
            return console.log("Unable to insert tasks");
        }
        console.log(result.ops);
    });

    /*==========
        READ
     ===========*/
    //Fetching the first document
    db.collection('tasks').findOne({name: 'buy book'}, (error, result) => {
        if (error) {
            return console.log("Unable to fetch tasks");
        }
        console.log(result);
    });

    //Fetching the document by id
    db.collection('tasks').findOne({_id: new ObjectID('5da0858c8516f6458e95aa86')}, (error, result) => {
        if (error) {
            return console.log("Unable to fetch tasks");
        }
        console.log(result);
    });


    //Fetching the documents which are false
    db.collection('tasks').find({completed:false},{}).toArray((error,task)=>{
        console.log(task);
    });

    //Counting the documents which are false
    db.collection('tasks').find({completed: false}, {}).count((error, count) => {
        console.log(count);
    });

    /*==========
        UPDATE
     ===========*/
    //update one
    db.collection('tasks').updateOne({completed: false}, {$set: {completed: true}}).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    //updating many
    db.collection('tasks').updateMany({completed: false}, {$set: {completed: true}}).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });


    /*==========
        DELETE
     ===========*/

    //delete one
    db.collection('tasks').deleteOne({completed: true}).then((error) => {
        console.log(error)
    }).catch((result) => {
        console.log(result)
    });

    //delete many
    db.collection('tasks').deleteMany({completed: true}).then((error) => {
        console.log(error)
    }).catch((result) => {
        console.log(result)
    });
});


