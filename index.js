const fs = require('fs');
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
});
  console.log('The file has been saved!');

setTimeout(() => {fs.writeFile('message.txt', 'hi everyone', (err) => {
  if (err) throw err;
});
console.log('The file has been saved!');
  
}, 2000);
console.log('End of the script');``
