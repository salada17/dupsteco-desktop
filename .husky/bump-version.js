const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Running post-commit...');

const types = ['major', 'minor', 'patch'];
const typeStr = types.join('/');

rl.question('Bump package version? Y/n: ', function (shouldBump) {
  if (shouldBump.toLowerCase() === 'y' || shouldBump === '') {
    rl.question(`Is it ${typeStr}: `, function (type) {
      const isValidType = types.includes(type);

      if (!isValidType) {
        const message = `Invalid type! Should be one of ${typeStr}. Falling back to patch...`;
        console.log(message);
        type = 'patch';
      }

      // For some reason, `npm version` does not commit and tag so git-add was added.
      let command = `cd release/app && npm version ${type} && git add .`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.log(`[ERROR] Failed "${command}": ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`[STDERR] Failed "${command}": ${stderr}`);
          return;
        }
        console.log(`Bumped package.json version to ${stdout}`);
        rl.close();
      });
    });
  } else {
    rl.close();
  }
});

rl.on('close', function () {
  console.log('\nOkay, cool.');
  process.exit(0);
});