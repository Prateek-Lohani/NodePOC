const path = require("path");

console.log(path.basename("c:\\user\\vscode\\index.js")); // returns the last portion of the path (index.js)
console.log(path.basename("c:\]user\\vscode\\index.js", ".js")); // returns the last portion of the path with the suffix removed (index)

console.log(path.dirname("c:\\user\\vscode\\index.js")); // returns the directory name of a path (c:\user\vscode)

console.log(path.extname("c:\\user\\vscode\\index.js")); // returns extension from the last '.' to end of string in the last portion of the path. (.js)
//  If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

console.log(path.join("c:", "users", "vscode", "nodejs")); // Join all arguments together and normalize the resulting path (c:\users\vscode\nodejs)
console.log(path.join("c:", "users", "vscode", "nodejs", "..")); // goes up a level (c:\users\vscode)
console.log(path.join("c:", "users", "vscode", "nodejs", "..", "..")); // goes up two levels (c:\users)

console.log(path.normalize("c:\\\\user\\vscode\\\\index.js")); // normalizes a string path, reducing '..' and '.' parts.
// When multiple slashes are found, they're replaced by a single one (c:\user\vscode\index.js)

console.log(path.parse("c:\\user\\vscode\\index.js")); // Returns an object from a path string containing root,dir,base,ext,name
/*
{
  root: 'c:\\',
  dir: 'c:\\user\\vscode',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/

console.log(path.parse("c:\\user\\vscode\\index.js").base); // Returns base
console.log(path.parse("c:\\user\\vscode\\index.js").ext); // Returns extension
console.log(path.parse("c:\\user\\vscode\\index.js").name); // Returns filename

const basePath="c:\\user\\vscode;c:\\user\\node";
console.log(basePath.split(path.delimiter)) // returns multiple path
/* 
[
  'c:\\user\\vscode',
  'c:\\user\\node'
] 
*/
// Returns Provides the platform-specific path delimiter ';' for Windows and ':' for POSIX




