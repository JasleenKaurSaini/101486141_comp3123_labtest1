const fs = require('fs');
const path = require('path');

const logsPath = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsPath)) 
  {
  const files = fs.readdirSync(logsPath);
  
  for (let i = 0; i < files.length; i++) 
    {
    const file = files[i];
    console.log('Deleting file:', file);
    fs.unlinkSync(path.join(logsPath, file));
  }
  
  fs.rmdirSync(logsPath);
} else {
  console.log('No Logs directory found.');
}
