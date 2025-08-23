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

// Run the smart browser opening
openOrRefreshTab();
