const express = require("express");
const bodyParser = require("body-parser");
const ObjectsToCsv = require('objects-to-csv');
const path = require("path");

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=> {
    res.render("index");
})

app.post("/add-professor" , async (req,res)=> {
    let row =[];
    const data = JSON.parse(JSON.stringify(req.body)); ;
    row.push(data);
    console.log(row);

    const csv = new ObjectsToCsv(row);
    await csv.toDisk(path.join(__dirname,"professor.csv"), { append: true }).then(result => console.log("saved")).catch(err => console.log(err));
    res.redirect("/");
    
});


app.post("/add-student", async(req,res)=> {

    let row =[];
    const data = JSON.parse(JSON.stringify(req.body)); ;
    row.push(data);
    console.log(row);

    const csv = new ObjectsToCsv(row);
    await csv.toDisk(path.join(__dirname,"students.csv"), { append: true }).then(result => console.log("saved")).catch(err => console.log(err));
    res.redirect("/")

})

app.listen(3000,()=> {
    console.log("App listening on port 3000")
})