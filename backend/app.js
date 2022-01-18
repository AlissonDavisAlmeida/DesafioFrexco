const express = require("express")
const axios = require("axios")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/produtos",(req, res)=>{


   
        axios.get("https://www.fruityvice.com/api/fruit/all").then(retorno=>{
           
           res.status(200).json({
              dados :  retorno.data
           })
       }).catch(erro=>{
           console.log(erro)
       })
     
})


app.listen(3002,()=>{
    console.log("Conectado na porta 3002")
})

