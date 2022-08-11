import e from 'express';
import 'dotenv/config'

const app = e()

const PORT = process.env.PORT

app.listen(PORT, () => console.log("the server is on!"))