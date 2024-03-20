import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test');

import Car from './model/car.js';

const initCars = [
    {
        brand: 'Hyundai',
        model: 'Kona',
        year: '2020',
    },
    {
        brand: 'Hyundai',
        model: 'HB20',
        year: '2018',
    },
    {
        brand: 'Hyundai',
        model: 'i20',
        year: '2012',
    },
    {
        brand: 'Hyundai',
        model: 'Sonata',
        year: '2017',
    },
    {
        brand: 'Kia',
        model: 'Picanto',
        year: '2004',
    },
    {
        brand: 'Kia',
        model: 'Rio',
        year: '2010',
    },
    {
        brand: 'Kia',
        model: 'K9',
        year: '2012',
    },
    {
        brand: 'Kia',
        model: 'Proceed',
        year: '2006',
    },
    {
        brand: 'Mazda',
        model: 'Mazda CX-30',
        year: '2020',
    },
    {
        brand: 'Mazda',
        model: 'Mazda3',
        year: '2013',
    },
    {
        brand: 'Mazda',
        model: 'Mazda CX-90',
        year: '2023',
    },
    {
        brand: 'Mazda',
        model: 'Mazda CX-5',
        year: '2012',
    },
    {
        brand: 'Mercedez-Benz',
        model: 'Mercedes-Benz EQS',
        year: '2022',
    },
    {
        brand: 'Mercedez-Benz',
        model: 'A-class',
        year: '2018',
    },
    {
        brand: 'Mercedez-Benz',
        model: 'Mercedes-Benz EQE',
        year: '2022',
    },
    {
        brand: 'Mercedez-Benz',
        model: 'Mercedes-Benz EQS SUV',
        year: '2022',
    },
    {
        brand: 'Toyota',
        model: 'Toyota Corolla Cross',
        year: '2021',
    },
    {
        brand: 'Toyota',
        model: 'Avaon',
        year: '2018',
    },
    {
        brand: 'Toyota',
        model: 'Corolla',
        year: '2015',
    },
    {
        brand: 'Toyota',
        model: 'Allion',
        year: '2021',
    },
]

async function init() {
    await Car.deleteMany();
    const cars = await Car.insertMany(initCars);
    console.log(cars);
    mongoose.connection.close();
}

async function findCarByBrand(brand) {
    const search = new RegExp(brand, 'i');
    const car = await Car.find({$or: [{brand: search}]});
    console.log(car);
    console.log(`${car.length} matches`);
    mongoose.connection.close();
}

async function listCars() {
    const cars = await Car.find();
    console.log(cars);
    console.log(`${cars.length} cars`);
    mongoose.connection.close();
}

async function addCar(car) {
    const addedCar = await Car.create(car);
    console.log(addedCar);
    console.log('Car added');
    mongoose.connection.close();
}

async function updateCar(_id, car) {
    await Car.updateOne({ _id }, car);
    console.log('Car update');
    mongoose.connection.close();
}

async function removeCar(_id) {
    await Car.deleteOne({ _id }); 
    console.log('Car deleted');
    mongoose.connection.close();
}

export { init, findCarByBrand, listCars, addCar, updateCar, removeCar }
