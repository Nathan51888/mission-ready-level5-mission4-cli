import { program } from 'commander';
import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'brand',
        message: 'Car Brand'
    },
    {
        type: 'input',
        name: 'model',
        message: 'Car Model'
    },
    {
        type: 'input',
        name: 'year',
        message: 'Year'
    },
]

import { init, findCarByBrand, listCars, addCar, updateCar, removeCar } from './index.js';

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

// Add Command
program
    .command('add')
    .alias('a')
    .description('Add a car')
    .action(() => { 
        inquirer.prompt(questions).then(answers => addCar(answers));
    })

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a car')
    .action((_id) => { 
        inquirer.prompt(questions).then(answers => updateCar(_id, answers));
    })

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a car')
    .action(_id => removeCar(_id));

program.parse(process.argv);
