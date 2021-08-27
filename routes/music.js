const express = require("express");
const router = express.Router();

const {
  findMusic,
  createMusic,
  editField,
  deleteField,
  editNestedField,
  deleteNestedField,
  editNestedArray,
  deleteNestedArray,
} = require("../controller/music");

router.get("/find-music", findMusic);

router.post("/create-music", createMusic);

router.put("/edit-field/:id", editField);

router.delete("/delete-field/:id", deleteField);

router.put("/edit-nested-field/:id", editNestedField);

router.delete("/delete-nested-field/:id", deleteNestedField);

router.put("/edit-nested-array/:arrayId", editNestedArray);

router.delete("/delete-nested-array/:arrayId", deleteNestedArray);

module.exports = router;
