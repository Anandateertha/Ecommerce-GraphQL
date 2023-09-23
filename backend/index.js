const express = require("express")
const PORT = 5000
const { ApolloServer } = require("@apollo/server")
const cors = require("cors")
const bodyParser = require('body-parser')
const { expressMiddleware } = require('@apollo/server/express4')
const User = require('./models/User')


require('dotenv').config();

const postgres=require('postgres')

const connectionString = process.env.REACT_APP_DATABASE
const sql = postgres(connectionString)


async function fetchUsersBySupabase() {
  const users = await sql`
    select * from users;
  `
  return users
}

const fetchuserByEmail=async(email)=>{
    return await sql`select * from users where email=${email}`
}


async function startServer() {

    const app = express()
    const server = new ApolloServer({
        typeDefs: `
            type User{
                id:ID!
                name:String!
                email:String!
                address:String!
                password:String!
            }

            type Query{
                getUserByEmail(email:String!):[User]
                getUsersOver:[User]
            }
        `,
        resolvers: {
            Query: {
                getUserByEmail:(_,{email})=>fetchuserByEmail(email),
                getUsersOver: () => fetchUsersBySupabase()
            }
        }
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start()

    app.use('/graphql', expressMiddleware(server))


    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })

}



startServer()
