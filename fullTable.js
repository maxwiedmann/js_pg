const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "postgres",
    host:"localhost",
    port: 5432,
    database: "test"
})

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("INSERT into employees VALUES ($1,$2)", [1001,'John']))
.then(() => client.query("SELECT * from employees"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())