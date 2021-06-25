const { readFile, writeFile } = require('fs')

readFile('./Folder/Subfolder/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const f1 = result
    readFile('./Folder/Subfolder/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const f2 = result
        writeFile('./Folder/Subfolder/thirdAsync.txt', 
            `The result is: ${f1}, ${f2}`, 
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
        })
    })
    
})