const fs = require('fs');
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
});
console.log('The file has been saved!'); 
console.log('Irfan Here');
console.log('Irfan Here 2');
setTimeout(() => {
  console.log('This message is shown after 2 seconds');
}, 2000);
   
console.log('New Change for watch mode');
