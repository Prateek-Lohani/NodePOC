import * as fs from "fs";

// ****************** Creating directory/folder

fs.mkdir("c:\\nodejs\\newFolder\\ChildFolder", { recursive: true }, (error) => {
        if(error) console.log(error)

  console.log("Directory Created");
});

// ****************** Reading content

fs.readdir("C:\\nodejs", (error, files) => {
    if(error) console.log(error)

  for (let file of files) {
    console.log(file);
  }
});

// ****************** Remove Folder/Directory

fs.rmdir("c:\\nodejs", { recursive: true }, (error) => {
    if(error) console.log(error)
    console.log('Directory Removed')    
})

// ****************** Create and Write files

fs.writeFile('textFile.txt','Callback API text file',(error)=>{
  if(error) console.log(error)
  console.log('File Created')
})

// ****************** Read File

fs.readFile('textFile.txt','utf-8',(error,data)=>{
  if(error) console.log(error)
    console.log(data)
})

// ****************** Append File

fs.appendFile('textFile.txt','\nThis is appended',(error)=>{
  if(error) console.log(error)
    console.log('Appended to file')
})

// ****************** Copy File 

fs.copyFile('textFile.txt','textFile_Copy',(error)=>{
  if(error) console.log(error)
})

// ****************** Get File Information

fs.stat('textFile.txt',(error,info)=>{
  if(error) console.log(error)
  console.log(info)  

  /*    
    info.size        // file size in bytes
    info.isFile()    // true if it's a file
    info.isDirectory() // true if it's a folder
    info.birthtime   // when file was created
    info.mtime       // last modified time
    */
})