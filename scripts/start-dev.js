const { spawn } = require('child_process');
const { exec } = require('child_process');

const url = 'http://localhost:3000';

// Function to check if Chrome is running and has the development tab open
function checkExistingTab() {
  return new Promise(resolve => {
    exec(
      `osascript -e 'tell application "Google Chrome" to get URL of active tab of front window'`,
      (_error, stdout) => {
        const currentUrl = stdout.trim();
        resolve(currentUrl.includes('localhost:3000'));
      }
    );
  });
}

// Function to open or refresh the development tab
async function openOrRefreshTab() {
  try {
    const hasDevTab = await checkExistingTab();

    if (hasDevTab) {
      // Refresh the existing tab
      // eslint-disable-next-line no-console
      console.log('🔄 Refreshing existing development tab...');
      exec(
        `osascript -e 'tell application "Google Chrome" to reload active tab of front window'`
      );
    } else {
      // Open new tab
      // eslint-disable-next-line no-console
      console.log('🌐 Opening new development tab...');
      exec(`open -a "Google Chrome" "${url}"`);
    }
  } catch (_error) {
    // Fallback: just open the URL
    // eslint-disable-next-line no-console
    console.log('🌐 Opening browser to development server...');
    exec(`open "${url}"`);
  }
}

// Start the webpack dev server
// eslint-disable-next-line no-console
console.log('🚀 Starting development server...');
const webpackProcess = spawn(
  'yarn',
  ['webpack', 'serve', '--mode', 'development'],
  {
    stdio: 'inherit',
    shell: true,
  }
);

// Wait a bit for the server to start, then open browser
setTimeout(async () => {
  try {
    // Check if server is running
    const { exec } = require('child_process');
    exec(
      `curl -s -o /dev/null -w "%{http_code}" ${url}`,
      async (_error, stdout) => {
        if (stdout.trim() === '200') {
          await openOrRefreshTab();
        }
      }
    );
  } catch (_error) {
    // eslint-disable-next-line no-console
    console.log('Could not automatically open browser');
  }
}, 3000);

// Handle process termination
webpackProcess.on('close', code => {
  // eslint-disable-next-line no-console
  console.log(`Development server stopped with code ${code}`);
  process.exit(code);
});
