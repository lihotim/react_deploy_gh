import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3500"
})

// start this JSON server by opening up a new terminal, then "npx json-server -p 3500 -w data/db.json"