const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

router.get("/", function (req, res) {
    res.send("hey it's working");
});

router.post("/register", async function (req, res) {
    try {
        let { email, password, fullname } = req.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname
                    });
                    res.send(user);
                }
            });
        });
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;