# File System Module Basics

This document covers the Node.js File System (fs) module, demonstrating three different approaches: Callback API, Promise API, and Sync API.

## Overview

The `fs` module in Node.js enables interaction with the file system. It provides methods for reading, writing, copying, and manipulating files and directories.

## Table of Contents

1. [Callback API](#callback-api)
2. [Promise API](#promise-api)
3. [Sync API](#sync-api)
4. [Key Operations](#key-operations)

---

## Callback API

The Callback API uses traditional Node.js callback pattern with error-first callbacks.

### Creating Directories

```
javascript
import * as fs from "fs";

fs.mkdir("c:\\nodejs\\newFolder\\ChildFolder", { recursive: true }, (error) => {
    if(error) console.log(error)
    console.log("Directory Created");
});
```

Key options:
- `{ recursive: true }` - Creates parent directories as needed

### Reading Directory Contents

```
javascript
fs.readdir("C:\\nodejs", (error, files) => {
    if(error) console.log(error)
    for (let file of files) {
        console.log(file);
    }
});
```

### Removing Directories

```
javascript
fs.rmdir("c:\\nodejs", { recursive: true }, (error) => {
    if(error) console.log(error)
    console.log('Directory Removed')    
})
```

### Writing Files

```
javascript
fs.writeFile('textFile.txt','Callback API text file',(error)=>{
    if(error) console.log(error)
    console.log('File Created')
})
```

### Reading Files

```
javascript
fs.readFile('textFile.txt','utf-8',(error,data)=>{
    if(error) console.log(error)
    console.log(data)
})
```

### Appending to Files

```
javascript
fs.appendFile('textFile.txt','\nThis is appended',(error)=>{
    if(error) console.log(error)
    console.log('Appended to file')
})
```

### Copying Files

```
javascript
fs.copyFile('textFile.txt','textFile_Copy',(error)=>{
    if(error) console.log(error)
})
```

### Getting File Information

```
javascript
fs.stat('textFile.txt',(error,info)=>{
    if(error) console.log(error)
    console.log(info)  

    // Available properties:
    // info.size        // file size in bytes
    // info.isFile()    // true if it's a file
    // info.isDirectory() // true if it's a folder
    // info.birthtime   // when file was created
    // info.mtime       // last modified time
})
```

---

## Promise API

The Promise API provides modern async/await syntax (available in Node.js v14.14+).

### Creating Directories

```
javascript
import * as fs from "fs/promises";

try {
    await fs.mkdir('c:\\nodejs\\folders');
    await fs.mkdir("c:\\nodejs"); 
    await fs.mkdir("c:\\nodejs\\folders"); 
    await fs.mkdir("c:\\nodejsNew\\foldersNew", { recursive: true });
    console.log("Folder Created");
} catch (error) {
    console.error(error);
}
```

### Reading Directory Contents

```
javascript
try {
    const files = await fs.readdir("c:\\nodejs");
    for (let file of files) {
        console.log(file);
    }
} catch (error) {
    console.error(error);
}
```

### Removing Directories

```
javascript
try {
    await fs.rmdir("c:\\nodejs");
    console.log("Folder Deleted");
} catch (error) {
    console.error(error);
}
```

### Writing Files

```
javascript
try{
    await fs.writeFile('textFile.txt','Hello World')
    await fs.writeFile('textFile.txt','This will replace')
    await fs.writeFile("c:\\nodejsNew\\textFile.txt", "Hello World");
}catch(error){
    console.error(error)
}
```

### Reading Files

```
javascript
try {
    const data = await fs.readFile('textFile.txt')
    console.log(data)  // returns buffer data

    const data2 = await fs.readFile('textFile.txt','utf-8')
    console.log(data2)  // returns string
}catch(error){
    console.error(error)
}
```

### Appending to Files

```
javascript
try{
    await fs.appendFile('textFile.txt','\nThis is appended data.')
}catch(error){
    console.error(error)
}
```

### Copying Files

```
javascript
try{
    await fs.copyFile('textFile.txt','textFile_Copy.txt')
}catch(error){
    console.log(error)
}
```

### Getting File Information

```
javascript
try{
    let info = await fs.stat('textFile.txt');
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
```

---

## Sync API

The Sync API performs synchronous operations that block the event loop.

### Creating Directories

```
javascript
import * as fs from 'fs'

fs.mkdirSync("c:\\nodejsSync\\newFolder\\ChildFolder", { recursive: true })
```

### Reading Directory Contents

```
javascript
let files = fs.readdirSync('C:\\nodejsSync');
for(let file of files){
    console.log(file)
}
```

### Removing Directories

```
javascript
fs.rmdirSync('C:\\nodejsSync\\newFolder',{recursive:true})
```

### Writing Files

```
javascript
fs.writeFileSync('textFile.txt','Sync API Fs')
```

### Reading Files

```
javascript
fs.readFileSync('textFile.txt','utf-8')
```

### Appending to Files

```
javascript
fs.appendFileSync('textFile.txt','\nThis is appended text')
```

### Copying Files

```
javascript
fs.copyFileSync('textFile.txt','textFileCopy.txt')
```

### Getting File Information

```
javascript
let info = fs.statSync('textFile.txt')
console.log(info)
```

---

## Key Operations

### File System Operations Summary

| Operation | Callback API | Promise API | Sync API |
|-----------|--------------|-------------|----------|
| Create Directory | `fs.mkdir(path, callback)` | `await fs.mkdir(path)` | `fs.mkdirSync(path)` |
| Read Directory | `fs.readdir(path, callback)` | `await fs.readdir(path)` | `fs.readdirSync(path)` |
| Remove Directory | `fs.rmdir(path, callback)` | `await fs.rmdir(path)` | `fs.rmdirSync(path)` |
| Write File | `fs.writeFile(path, data, callback)` | `await fs.writeFile(path, data)` | `fs.writeFileSync(path, data)` |
| Read File | `fs.readFile(path, callback)` | `await fs.readFile(path)` | `fs.readFileSync(path)` |
| Append File | `fs.appendFile(path, data, callback)` | `await fs.appendFile(path, data)` | `fs.appendFileSync(path, data)` |
| Copy File | `fs.copyFile(src, dest, callback)` | `await fs.copyFile(src, dest)` | `fs.copyFileSync(src, dest)` |
| Get Stats | `fs.stat(path, callback)` | `await fs.stat(path)` | `fs.statSync(path)` |

---

## Best Practices

### 1. Choose the Right API

- **Callback API**: Legacy applications, Node.js versions < 14.14
- **Promise API**: Modern applications, use with async/await
- **Sync API**: Quick scripts, initialization code, avoid in production servers

### 2. Error Handling

Always wrap file system operations in try-catch blocks:

```
javascript
// Promise API
try {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.error('Error reading file:', error);
}

// Callback API
fs.readFile('file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    console.log(data);
});
```

### 3. Use Recursive Option

When creating directories with potential missing parents:

```
javascript
await fs.mkdir('/path/to/nested/dir', { recursive: true });
```

This prevents errors if parent directories don't exist.

### 4. Buffer vs String

- Read without encoding: Returns Buffer (raw binary data)
- Read with encoding ('utf-8'): Returns decoded string

```
javascript
const buffer = await fs.readFile('file.txt');      // Buffer
const string = await fs.readFile('file.txt', 'utf-8'); // String
```

---

## Common Use Cases

1. **Configuration Files**: Read/write JSON configuration
2. **Logging**: Append logs to files
3. **Data Persistence**: Store application data
4. **File Processing**: Read, transform, and write files
5. **Build Scripts**: File operations during build process

---

## Additional Resources

- [Node.js fs Module Documentation](https://nodejs.org/api/fs.html)
- [File System Flags](https://nodejs.org/api/fs.html#file-system-flags)
- [Working with Paths](https://nodejs.org/api/path.html)

---

**Note**: When working with file paths on Windows, remember to escape backslashes or use raw strings (`r"path"` or double backslashes `\\`).
