const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const workout1schema = new Schema(
    {
        workoutname: {
            type: String
        },
        exercise: [{
            exercisename: {
                type: String
            },
            
        numberofreps: {
            type: Number
        }
    }
        ],
        date: {
            type: Date,
            default: Date.now 
        }
    }
);

const Workout1 = mongoose.model('Workout1', workout1schema)

module.exports = Workout1