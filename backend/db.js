

// const testingConnection=async ()=>{
//     try {
//         const result=await sql`select 1`
//         console.log('Connected to the Database',result)
//     } catch (error) {
//         console.log('Not connected to the database',error)
//     }finally{
//         sql.end()
//     }
// }

// module.exports=testingConnection

// const drizzle=require('drizzle-orm/postgres-js')
// const postgres=require('postgres')
// const users=require('./schema')

// const connectionString = process.env.REACT_APP_DATABASE
// const client=postgres(connectionString)
// const db=drizzle(client)


// const allUsers = await db.select().from(users);

// db.js

// export default sql
