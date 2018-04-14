const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();  
app.use(cors());

mongoose.connect('mongodb://rafel:ko6tu6li@ds227459.mlab.com:27459/gql-ninja');
mongoose.connection.once('open', ()=>{
    console.log('db connected');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(4000,() => {
    console.log('now listening for request on port 4000');
});