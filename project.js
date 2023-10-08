const fs = require('fs')

let keyword= process.argv[2]; //or to write the keyword straight away like this (keyword="rabbit")
let arr=[];

fs.readFile('./text-file.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error");
    }else{
        arr=data.split('.');
        arr.forEach((elm)=>{
            if(elm.includes(keyword)){
                console.log(elm)
            }
        });
    }
})

