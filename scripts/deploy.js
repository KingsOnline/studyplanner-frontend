import { execSync } from 'child_process';
import { renameSync, rmSync } from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'out');
const storybookDir = path.join(process.cwd(), 'storybook-static');
const storybookDest = path.join(outDir, 'storybook');

console.log('Cleaning previous storybook build...');
rmSync(storybookDest, { recursive: true, force: true });

console.log('Moving Storybook static build into /out/storybook...');
renameSync(storybookDir, storybookDest);

console.log('Deploying combined build to GitHub Pages...');
execSync('npx gh-pages -d out', { stdio: 'inherit' });

console.log('Deployment complete');