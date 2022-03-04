const { count } = require('console')

const writeFileAsync = async (path , data) => {
    return new promise((resolve , reject) => fs.writefile(path, data , (err) => {
    if (err) {
        return reject  (err.message)

    }
      resolve ()
} ))
}

const appendFileAsync = async (path , data) => {
    return new promise((resolve , reject) => fs.appendfile(path, data , (err) => {
    if (err) {
        return reject  (err.message)

    }
      resolve ()
} ))
}
const readFileAsync = async (path ) => {
    return new promise  ((resolve , reject) => fs.readfile(path, {encoding : 'utf-8'}, (err,data) => {
    if (err) {
        return reject  (err.message)

    }
      resolve (data)
} ))
}

 writeFileAsync (path.resolve(__dirname , "text.txt") ,'data')
 .then (() =>readFileAsync (path.resolve(__dirname , "text.txt"))
.then(data => data.split('').length)
.then(count => writeFileAsync(path.resolve(__dirname , "count.txt")) 

//const text = "BIL 4 2 5"
//writeFileAsync (path.resolve(text , "text.txt",'data'))
//.then(() =>  readFileAsync(path.resolve(text), "BIL 4 2 5"))

//.catch(err => console.log(err))





//const fsPromise = require('fs/promises')
const fsPromise = require('fs').promises;
const fileread = async() => {
    try {
        await fsPromise.writeFile(path.resolve(__dirname , "text.txt"));
    } catch(error) {

    }
}
