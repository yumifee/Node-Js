const fs = require('fs')
// const book = {
//     title: 'Surty like an angel',
//     author: 'Yumi Fee'
//    }
//    // Covert JavaScript object into JSON string
//    const bookJSON = JSON.stringify(book)
//    // Covert JSON string into object
//    const bookObject = JSON.parse(bookJSON)
//    console.log(bookObject.title) // Print: title
//    console.log(bookObject.author) // Print: author

// fs.writeFileSync('S4L5.json', bookJSON)

   const dataBuffer = fs.readFileSync('S4L5.json')
   const dataJSON = dataBuffer.toString()
   const user = JSON.parse(dataJSON)

   user.name = 'Surty'
   user.planet = 'Merkurius'
   user.age = 19

   const userJSON = JSON.stringify(user)
   fs.writeFileSync('S4L5.json', userJSON)