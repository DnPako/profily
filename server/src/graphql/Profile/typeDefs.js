import {gql} from 'apollo-server-express';

export default gql`
    type Profile {
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
        phoneNumber: Float
        adresse: Address
        birthday: String
    }

    type Address {
        id: ID!
        country: Country
        wayNumber: Int
        wayType: String
        additionnalAddress: String
        countryBasedAddress: String
    }

    type Country {
        name: String,
        city: String
        postalCode: Int
    }

    input UpdateProfileInputs {
        firstname: String
        lastname: String
        email: String
        phoneNumber: Float
        birthday: String
        adresse: AddressInputs
    }

    input CreateProfileInputs {
        firstname: String!
        lastname: String!
        email: String!
        phoneNumber: Float
        birthday: String
        adresse: AddressInputs
    }

    input AddressInputs {
        country: CountryInputs
        wayNumber: Int
        wayType: String
        additionnalAddress: String
        countryBasedAddress: String
    }

    input CountryInputs {
        name: String,
        city: String
        postalCode: Int
    }

    type Query {
        profile(id: ID!): Profile!
        profiles: [Profile]!
    }

    type Mutation {
        createProfile(profile: CreateProfileInputs): Profile!
        updateProfile(id: ID! , profile: UpdateProfileInputs): Profile!
        deleteProfile(id: ID!): Profile!
    }
`