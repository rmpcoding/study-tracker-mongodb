const express = require('express');
const router = express.Router();
const User = require('../Model/User');
const auth = require('../middleware/auth');

/* ------------------------------- GET Users -------------------------------- */

router.get('/users', async (req, res) => {
    const users = await User.find({});
    res.send(users);
    console.log(users);
});

/* ------------------------------- CREATE User ------------------------------ */

router.post('/users/create', auth, async (req, res) => {
    const user = new User({ ...req.body });

    try {
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(500).send(`Error: ${e}`);
    }
});

/* ------------------------------- UPDATE User ------------------------------ */

router.patch('/users/update/:id', async (req, res) => {
    console.log('test');
    res.send('test from patch route');
});

/* ------------------------------- DELETE User ------------------------------ */

router.delete('/users/delete/:id', async (req, res) => {
    console.log('test');
    res.send('test from delete route');
});

module.exports = router;
