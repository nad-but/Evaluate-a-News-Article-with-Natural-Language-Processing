const { response } = require("express");
const exp = require("express");
const cors = require("cors");
const denv = require('dotenv');
const app = exp();
const {AnlyzAPI} = require('./ApiAnalyzeFile');
app.use(cors());
//to read json file
app.use(exp.json());
//To Configer env file
denv.config();
//retrieve My API Key from .env file
const mykey = process.env.MyApiKey;

app.use(exp.static('dist'))

console.log(__dirname)

app.get("/",(request,response)=>{
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post("/",async(req,res)=>{
    //data input
    const inputurl= req.body.input;
    const ApiAnalyz = await AnlyzAPI(inputurl,mykey);
    console.log(ApiAnalyz);
    const {example} = ApiAnalyz;
    //send data to the client
    res.send({example:example});
});

const portNum = 8097;
app.listen(portNum,()=>
console.log(`Server runing on http://localhost:${portNum}/`))