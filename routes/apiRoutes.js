const router = require("express").Router();
const Workout = require('../models/workouts');
const { route } = require("./htmlRoutes");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        // .sort({ date: -1 })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put("/api/workouts/id", (req, res) => {
    Workout.findOneAndUpdate({ id: req.params.id }, {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
    }, {
        new: true
    }).then(dbWorkouts => {
        res.json(dbWorkouts);
    }).catch(err => {
        res.status(400).json(err)
    })

});



module.exports = router;