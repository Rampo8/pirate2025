const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

var data = require("./data.js").data;
// Connection URL
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);
// Database Name

const dbName = 'pirat2025';
async function main() {

 // Use connect method to connect to the server

 await client.connect();

 console.log('Connected successfully to server');

 const db = client.db(dbName);

 const collection = db.collection('pirats');
 // the following code examples can be pasted here...

 const insertResult = await collection.insertMany(data);

 console.log('Inserted documents =>', insertResult);

 return 'done.';

}
userSchema.virtual("password").set(function(password){
    this._purePassword = password
    this.salt = Math.random() + ""
    this.hashedPassword = this.encryptPassword(password)
}).get(function(){
    return this._purePassword
})

userSchema.methods.encryptPassword = function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
}

module.exports.User = mongoose.model("User",userSchema)


main()

 .then(console.log)

 .catch(console.error)
 .finally(() => client.close());