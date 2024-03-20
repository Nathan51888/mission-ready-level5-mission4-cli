import { program } from 'commander';

import { listCars } from './index.js';

// List Command
program
    .command('list')
    .alias('ls')
    .description('List all cars')
    .action(() => listCars());

program.parse(process.argv);
