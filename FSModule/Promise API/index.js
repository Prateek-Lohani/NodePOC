import * as fs from "fs/promises";

// ****************** Creating directory/folder

try {
  // - await pauses execution until the folder is successfully created

  await fs.mkdir('c:\\nodejs\\folders');  // results in an error as the nodejs folder is not present

    await fs.mkdir("c:\\nodejs"); // creates a folder named "nodejs" in C directory
    await fs.mkdir("c:\\nodejs\\folders"); // creates folders folder as nodejs is created

    await fs.mkdir("c:\\nodejsNew\\foldersNew", { recursive: true }); // - { recursive: true } ensures that if any parent folders (like "nodejsNew") do not exist, they will be created automatically Without recursive: true, it would throw an error if parent folders are missing

  console.log("Folder Created");
} catch (error) {
  console.error(error);
}

// ****************** Reading content

try {
  const files = await fs.readdir("c:\\nodejs"); // reads all the files in the directory
  for (let file of files) {
    console.log(file); // return the file name of each files
  }
} catch (error) {
  console.error(error);
}

// ****************** Remove Folder/Directory

try {
  await fs.rmdir("c:\\nodejs"); // removes nodejs folder. NOTE- The folder needs to be empty
  console.log("Folder Deleted");
} catch (error) {
  console.error(error);
}

// ****************** Create and Write files

try{
    await fs.writeFile('textFile.txt','Hello World') // First argument is path and file, second argument is the content
    await fs.writeFile('textFile.txt','This will replace') // this will replace the existing content in the file
    await fs.writeFile("c:\\nodejsNew\\textFile.txt", "Hello World"); // cretes textFile.txt in the given directory with the content
}catch(error){
    console.error(error)
}

// ****************** Read File

try {
    const data=await fs.readFile('textFile.txt')
    console.log(data)  // this will results in the buffer data (raw binary format)

    const data2=await fs.readFile('textFile.txt','utf-8') // 'utf-8' tells Node to decode the file into a string
    console.log(data2)  
}catch(error){
    console.error(error)
}

// ****************** Append File

try{
    await fs.appendFile('textFile.txt','\nThis is appended data.')  // This will append the data in the textFile
}catch(error){
    console.error(error)
}

// ****************** Copy File 

try{
    await fs.copyFile('textFile.txt','textFile_Copy.txt') // copies the content of the first file to the second file 
}catch(error){
    console.log(error)
}

// ****************** Get File Information

try{
    let info=await fs.stat('textFile.txt');  // returns metadata (information) about a file or folder
    console.log(info)

    /*    
    info.size        // file size in bytes
    info.isFile()    // true if it's a file
    info.isDirectory() // true if it's a folder
    info.birthtime   // when file was created
    info.mtime       // last modified time
    */

}catch(error){
    console.error(error)
}
