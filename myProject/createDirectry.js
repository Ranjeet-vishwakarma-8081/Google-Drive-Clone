const fs = require('fs');
// Specify the path of the directory you want to create
const dirPath = './newDirectory';

// Check if the directory exists
if (!fs.existsSync(dirPath)) {
    // Attempt to create the directory
    fs.mkdirSync(dirPath);
    console.log(`Directory ${dirPath} has been created.`);
} else {
    console.log(`Directory ${dirPath} already exists.`);
}
