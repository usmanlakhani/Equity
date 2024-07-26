import mongoose from 'mongoose'

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/workoutdiary'

  mongoose.connection.on('open', () => {
    console.info('Connected to database')
  })

  const connection = mongoose.connect(DATABASE_URL)

  return connection
}
