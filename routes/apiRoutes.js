const router = require("express").Router();
const Workout = require('../models/workouts');

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        // .sort({ date: -1 })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})


module.exports = router;