import mongoose from 'mongoose'

let isConnected = false //variable to check if mongoose is connected

export const connectedToDB = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URL) return console.log('Mongodb url not found')
    if (isConnected) return console.log('Connected to MongoDB')
    
    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnected = true

        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}