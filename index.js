import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test');

import Car from './model/car.js';

async function main() {
    const car = await Car.create({ brand: 'Civic', year: '2020' });
    console.log(car);


    const carfind = await Car.find();
    console.info(carfind);
    console.info(`${carfind.length} cars`);
    mongoose.connection.close();

}

main()
