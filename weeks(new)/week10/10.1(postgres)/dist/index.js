"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_EZkuFea6NXO4@ep-solitary-cloud-a8j30nx8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
        console.log(result);
    });
}
//  createUsersTable();
function addUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ name, email, password }) {
        yield client.connect();
        const result = yield client.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`, [name, email, password]);
        console.log(result);
        yield client.end();
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    SELECT * FROM users WHERE email = $1
    `, [email]);
        console.log(result.rows[0]);
        yield client.end();
    });
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
