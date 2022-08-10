
const ObjectsToCsv = require('objects-to-csv');
const path = require("path");


const proffesorEnrollBtn = document.querySelector(".prof-btn");
const profCourseOne = document.querySelector("#prof-course-1");
const profCourseTwo = document.querySelector("#prof-course-2");
const profName = document.querySelector("#prof-name");


const professorEnroll = async (e)=> {

    e.preventDefault();
    let row = [];

    const data = {};
    data.name = profName.value;
    data["COURSE-1"] = profCourseOne.value;
    data["COURSE-2"] = profCourseTwo.value;
    row.push(data);

    console.log(row);

    const csv = new ObjectsToCsv(row);
    await csv.toDisk(path.join(__dirname,"professor.csv")).then(result => console.log("saved")).catch(err => console.log(err));



}

proffesorEnrollBtn.addEventListener("click",professorEnroll);
