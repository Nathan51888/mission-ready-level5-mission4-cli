import { program } from 'commander';

import { init, findCarByBrand, listCars, removeCar } from './index.js';

// Init
program
    .command('init')
    .description('Initialize database')
    .action(() => init());

// Find Command
program
    .command('find <brand>')
    .alias('f')
    .description('Find car by brand')
    .action(brand => findCarByBrand(brand));

// List Command
program
    .command('list')
    .alias('ls')
    .description('List all cars')
    .action(() => listCars());

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a car')
    .action(_id => removeCar(_id));

program.parse(process.argv);
