import { gql } from "apollo-server";

const typeDefs = gql`

  type User {
    id : ID!
    email : String!
    roll : String!
    active : String!
    backdata : String!
    businessname : String!
    password :  String!
    rawexcels : [Rawexcel!]!
    createdAt : String!
  }



  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
  }

  type Rawexcel {
    id : ID!
    date : String!
    name: String!
    address: String!
    phone: String!
    code: String!
    color: String!
    size: String!
    price: String!
    amount: String!
    total: String!
    roll : String!
    email : String!
    url : String!
  }

  type Bankdata {
    id : ID!
    userId : String!
    seller: String!
    wholesaler: String!
    total : String!
    bankcode: String!
    bankaccount: String!
    bankowner: String!
  }




  type Mutation {
    usersbyRollPagination(roll : String!, offset: Int!, limit :Int! ) : [Rawexcel!]!
    loginUser(email: String!, password: String!): User!
    filteredBank(userid: String!, seller: String!, wholesaler: String!): Bankdata!

    usersbyId(userId : ID!,offset: Int!, limit :Int! ): [Rawexcel!]!
    createUser(email: String!, password: String!, roll: String!, active : String!, businessname : String!, backdata : String!): User!
    createChef(name: String!): Chef!
    updateuserbyActive(id : ID!, active : String! ): [User!]!
    updateuserbyBackdata(id : ID!, backdata : String! ): [User!]!
    deleteBackdata(userId : String!): [Bankdata!]!

    createRestaurant(chefId: ID!, name: String!): Restaurant!
    createRawexcel(userId: ID!,date: String!, name: String!, address:String!, phone: String!, 
      code: String!, color:String!, size: String!,
     price: String!, amount:String!, total: String!, roll: String!, email: String!, url : String!
): Rawexcel!
createBankdata(userId: String!, seller : String!,
  wholesaler: String!, bankcode:String!, bankaccount: String!, 
  bankowner: String!
): Bankdata!



  }

  type Query {
    chefs: [Chef!]!
    users: [User!]!
    bankdatas : [Bankdata!]!
    bankdatasbyId(userid : String!): [Bankdata!]!
    usersbyRoll(roll : String!): [User!]!
 
  }
`;



export default typeDefs;