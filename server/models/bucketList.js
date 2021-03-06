const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bucketListSchema = new Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  todoList: [
    {
      name: { type: String },
      completed: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date }
    }
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const BucketList = mongoose.model('BucketList', bucketListSchema)

module.exports = BucketList