const graphql = require('graphql');

const { GraphQLObjectType, GrapQLString } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GrapQLString},
        name: {type: GrapQLString},
        genre: {type: GrapQLString}
    })
});
