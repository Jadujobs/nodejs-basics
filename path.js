const path = require("path");

console.log(__dirname); // Directory name, tells you the path of the folder where the file exist
console.log(__filename);

console.log(path.extname(__filename));
console.log(path.basename(__filename));

// /user/DELL/public

// \user\DELL\public

// /nodejs-basic/path.js
// /nodejs-basic\path.js

console.log(path.join(__dirname, "path", "path.js"));
