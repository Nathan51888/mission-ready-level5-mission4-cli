import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test');

import Car from './model/car.js';

async function main() {
    const car = await Car.create({ brand: 'Civic', year: '2020' });
    console.log(car);
}

async function listCars() {
    const cars = await Car.find();
    console.log(cars);
    console.log(`${cars.length} cars`);
    mongoose.connection.close();
}

export { listCars }
