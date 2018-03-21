const graphql = require('graphql');

const { GraphQLObjectType, GrapQLString,GraphQLSchema } = graphql;


//dummy data


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GrapQLString},
        name: {type: GrapQLString},
        genre: {type: GrapQLString}
    })
});

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GrapQLString}},
            resolve(parent, args){
                //code to get data from Ddb / other source
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery
})