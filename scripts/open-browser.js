const { exec } = require('child_process');

const url = 'http://localhost:3000';

// Try to open the browser
exec(`open ${url}`, error => {
  if (error) {
    console.error('Could not open browser automatically');
    console.log(`Please open your browser and navigate to: ${url}`);
  } else {
    console.log(`Opened browser to: ${url}`);
  }
});
