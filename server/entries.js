const auth = require("./auth.js");
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const users = require("./users.js");
const User = users.model;

const entrySchema = new mongoose.Schema({
  date: String,
  title: String,
  entry: String
});

const Entry = mongoose.model('Entry', entrySchema);

router.get('/all', async (req, res) => {
  try{
    let entries = await Entry.find();
    return res.send(entries);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get my entries
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  try {
    let entries = await Entry.find({
      user: req.user
    });
    return res.send(entries);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const entry = new Entry({
    date: req.body.date,
    title: req.body.title,
    entry: req.body.entry
  });
  try {
    await entry.save();
    return res.send(entry);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

/*router.put('/:id', async (req, res) => {
  try{
    let oldEntry = await Entry.findOne({
      _id: req.params.id
    });
    await Entry.updateOne({
      _id: req.params.id,

    });
  }
  catch (error){
    console.log(error);
    return res.sendStatus(500);
  }
});*/

router.delete('/:id', async (req, res) => {
  try {
    console.log("Deleting");
    await Entry.deleteOne({
      _id: req.params.id
    });
    console.log("Success!");
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
