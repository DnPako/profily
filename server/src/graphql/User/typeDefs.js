import {gql} from 'apollo-server-express';

export default gql`
    type User {
        id: ID!
        email: String!
        password: String
    }
    
    input UpdateUserInputs {
        email: String
        password: String
    }

    type Query {
        user(id: ID!): User!
        useByEmail(email: String!): User!
    }

    type Mutation {
        createUser(email: String!, password: String): User!
        updateUser(id: ID! , user: UpdateUserInputs): User!
        deleteUser(id: ID!): User!
    }
`