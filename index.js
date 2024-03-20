import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test');

import Car from './model/car.js';

async function main() {
    const car = await Car.create({ brand: 'Civic', year: '2020' });
    console.log(car);
}

const initCars = [
    {
        brand: 'Zastava',
        year: '2020',
    },
    {
        brand: 'Subaru',
        year: '1953',
    },
    {
        brand: 'Irizar',
        year: '1889',
    },
    {
        brand: 'Civic',
        year: '2020',
    },
]

async function init() {
    await Car.deleteMany();
    const cars = await Car.insertMany(initCars);
    console.log(cars);
    mongoose.connection.close();
}

async function listCars() {
    const cars = await Car.find();
    console.log(cars);
    console.log(`${cars.length} cars`);
    mongoose.connection.close();
}

async function removeCar(_id) {
    await Car.deleteOne({ _id }); 
    console.log('Car deleted');
    mongoose.connection.close();
}

export { init, listCars, removeCar }
