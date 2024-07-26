import mongoose, { Schema } from 'mongoose'

const setSchema = new Schema(
  {
    number: { type: Number, required: true },
    repetitions: { type: Number, required: true },
    exercise: { type: String, required: true },
    rpe: { type: Number, required: false },
    weight: { type: Number, required: false },
    tags: [String],
  },
  { timestamps: true },
)

export const Set = mongoose.model('set', setSchema)
