import * as fs from 'fs'

// ****************** Creating directory/folder

fs.mkdirSync("c:\\nodejsSync\\newFolder\\ChildFolder", { recursive: true })

// ****************** Reading content

let files = fs.readdirSync('C:\\nodejsSync');

for(let file of files){
    console.log(file)
}

// ****************** Remove Folder/Directory

fs.rmdirSync('C:\\nodejsSync\\newFolder',{recursive:true})

// ****************** Create and Write files

fs.writeFileSync('textFile.txt','Sync API Fs')

// ****************** Read File

fs.readFileSync('textFile.txt','utf-8')

// ****************** Append File

fs.appendFileSync('textFile.txt','\nThis is appended text')

// ****************** Copy File 

fs.copyFileSync('textFile.txt','textFileCopy.txt')

// ****************** Get File Information

let info = fs.statSync('textFile.txt')

console.log(info)
  /*    
    info.size        // file size in bytes
    info.isFile()    // true if it's a file
    info.isDirectory() // true if it's a folder
    info.birthtime   // when file was created
    info.mtime       // last modified time
    */
