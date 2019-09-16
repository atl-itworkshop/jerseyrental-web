const express = require("express");
const router = express.Router();
var pool = require("../config/db");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", (req, res) => {
   res.json({ msg: "Registers a user..." });
});

// @route   GET api/users
// @desc    Get a user
// @access  Public
router.get("/", (req, res) => {
   let sql = "SELECT * FROM COUNTRY";
   let query = pool.query(sql, (err, results) => {
      if (err) throw err;

      console.log(results);
      res.json(results);
   });
});

module.exports = router;
