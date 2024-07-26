import { initDatabase } from './db/init.js'
import { Set } from './db/models/set.js'

await initDatabase()

const set = new Set({
  number: 1,
  repetitions: 12,
  exercise: 'Bicep Curls',
  rpe: 6,
  weight: 40,
  tags: ['hard', 'challanging'],
})

await set.save()

const sets = await Set.find()
console.log(set)
