import { program } from 'commander';

import { init, listCars } from './index.js';

// Init
program
    .command('init')
    .description('Initialize database')
    .action(() => init());

// List Command
program
    .command('list')
    .alias('ls')
    .description('List all cars')
    .action(() => listCars());

program.parse(process.argv);
