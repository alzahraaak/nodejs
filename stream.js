const fs =require("fs");
const path = require("path");


fs.readFile(path.resolve(__dirname, "testdata.txt"), (err,data) => {
    if(err) {
        throw err 
    }
    console.log(data)
})

const stream =fs.createReadStream(path.resolve(__dirname, "testdata.txt"))


stream.on('open',()=>console.log("start"))


stream.on ('data',(chunk) => {
    console.log(chunk);
})

stream.on('end', ()=> console.log("end"))

const writestream = fs.createWriteStream(path.resolve(__dirname, "testdata2.txt"))
for (let i=0 ; i < 10; i++)
{
    writestream.write (i+ '\n');
}
writestream.end();
writestream.close ();


