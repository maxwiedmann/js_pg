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
.then(() => client.query("SELECT * from employees WHERE name = $1", ["Max"]))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())