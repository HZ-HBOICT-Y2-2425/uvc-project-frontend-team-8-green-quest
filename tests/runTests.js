// @ts-nocheck
import { exec } from 'child_process';

/**
 * Helper function to execute a test script
 */
const runTest = (script) =>
  new Promise((resolve, reject) => {
    console.log(`Running: ${script}`);
    exec(`node ${script}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Test failed: ${script}\n`, stderr);
        reject(error);
      } else {
        console.log(`✅ Test passed: ${script}\n`, stdout);
        resolve();
      }
    });
  });

(async () => {
  try {
    // Run smoke test
    //await runTest('tests/smokeTest.js');
    
    // Run system test
    await runTest('tests/systemTest.js');

    console.log('🎉 All tests passed!');
  } catch (err) {
    console.error('❌ One or more tests failed!');
    process.exit(1); // Exit with non-zero status code
  }
})();
