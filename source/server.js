import express from "express"
import cors from "cors"


const app = express()

app.use(express.static(path.join(__dirname, 'source')))

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.get('/', (request, response) => {
    response.send('<h2>Hello World!!</h2>')
})

const office = [
    {
      id: 1,
      type: "federal",
      name: "President",
    },
    {
      id: 2,
      type: "legislative",
      name: "Senator",
    },
    {
      id: 3,
      type: "state",
      name: "Governor",
    },
    {
      id: 4,
      type: "local government",
      name: "Chairman",
    },
    {
      id: 5,
      type: "federal",
      name: "Vice President",
    },
    {
      id: 6,
      type: "state",
      name: "Deputy Governor",
    },
  ];

app.get('/app/offices', (request, response) => {
    response.json(office)
})

app.listen(PORT, () =>  {
    console.log(`server is running on http://localhost:${PORT}`)
})

app.post('./post', (request, response) => {
    response.json(request.body)
})