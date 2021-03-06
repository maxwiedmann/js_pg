const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    database: "test"
})

execute()


async function execute(){
    try{

    await client.connect()
    console.log("Connect successfully.")
    const results = await client.query("select * from employees")
    console.table(results.rows)
    await client.end()
    console.log("Client disconnect successfully.")
    }
    catch (EX)
    {
        console.log(`Some went wrong  ${ex}`)
    }
    finally
    {
        await console.log('Client disconnected successfully.)')
    }
}
