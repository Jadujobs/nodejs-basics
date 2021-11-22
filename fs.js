const fs = require("fs");
const path = require("path");

const rootFolder = path.join(__dirname, "test");
const rootFile = path.join(rootFolder, "index.js");
// Create a Folder
// fs.mkdir(rootFolder, (err) => {
//   if (err) {
//     return console.log("Something went unexpected!");
//   }

//   console.log("Folder Created!");
// });

// Create a File
// fs.writeFile(
//   rootFile,
//   "console.log('hello')",
//   (err) => {
//     if (err) {
//       return console.log("Something went unexpected!");
//     }

//     console.log("File Created!");
//   }
// );

// Reading a File
// fs.readFile(rootFile, "utf-8", (err, data) => {
//   if (err) {
//     return console.log("Something went unexpected!");
//   }

//   console.log(data);
// });

// Remove a File
// fs.unlink(rootFile, (err) => {
//   if (err) {
//     return console.log("Something went unexpected!");
//   }

//   console.log("File Removed!");
// });

// Remove a Folder
fs.rmdir(rootFolder, (err) => {
  if (err) {
    return console.log("Something went unexpected!");
  }

  console.log("Folder Removed!");
});
