// Requiring the path package from the base folder
const path = require('path');

 console.log(path.sep);

 // Extracting the relative file path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


// Extracting the filename using the basename method.
const base = path.basename(filePath);
console.log(filePath);

 // Creating an absolute path using the resolve method.
const absolute = path.resolve(__dirname, 'conten', 'subfolder', 'test.txt');
console.log(absolute);  