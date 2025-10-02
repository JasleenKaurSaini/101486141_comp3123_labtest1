const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logsDir)) 
    {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) 
    {
    const filename = `log${i}.txt`;
    fs.writeFileSync(filename, `This is the content of ${filename}`);
    console.log(filename);
}
