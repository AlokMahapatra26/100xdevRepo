import { Client } from 'pg';


  const client = new Client({
    connectionString : "postgresql://neondb_owner:npg_EZkuFea6NXO4@ep-solitary-cloud-a8j30nx8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
  });


 async function createUsersTable(){

    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log(result);
 }

//  createUsersTable();

async function addUser({name , email , password}:{name : string , email : string , password : string}){
    await client.connect();
    const result = await client.query(
        `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
        [name, email, password]
    );
    console.log(result);
    await client.end();
}

async function getUser(email:string){
    await client.connect();
    const result = await client.query(`
    SELECT * FROM users WHERE email = $1
    ` , [email])
    console.log(result.rows[0]);
    await client.end(); 
}

// async function getUser(email:string){
//     await client.connect();
//     const result = await client.query(
//         `SELECT * FROM users WHERE email = $1`,
//         [email]
//     );
//     console.log(result.rows[0]);
//     await client.end();
// }            

getUser(`aarti@gmail.com`);