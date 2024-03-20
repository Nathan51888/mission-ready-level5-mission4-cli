import mongoose from 'mongoose'

const carSchema = mongoose.Schema({
    brand: { type: String },
    model: { type: String },
    year: { type: String },
});

export default mongoose.model('Car', carSchema)
