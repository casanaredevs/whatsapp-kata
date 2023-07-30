import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./Infrastructure/routes"
import http from "http"
const port = process.env.PORT || 3001
const app = express()
const server = http.createServer(app);

app.use(cors())
app.use(express.json())
app.use(express.static('tmp'))
app.use(`/api/v1/`,routes)

server.listen(port, () => console.log(`Application run in http://localhost:${port}`))

export { server }