const userTypeDef = `#graphql
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  profilePicture: String
}
type Query {
  getUsers: [User!]
  getUser(userId : ID!): User
  authUser : User
}
type Mutation {
  login(input : LoginInput) : User
  signUp(input : SignUpInput) : User
  logout(input : LogoutResponse) : User
}
input LoginInput {
  username : String!
  name: String!
  password : String!
  gender : String!
}
input SignUpInput {
  username : String!
  email : String!
  password : String!
  profilePicture : String
}
input LogoutResponse {
  message :String!
}

`;

export default userTypeDef;
