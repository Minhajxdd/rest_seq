const { createProject } = require("../controller/projectController");
const { authentication } = require("../controller/authController");

const router = require("express").Router();

router.route("/").post(authentication, createProject);

module.exports = router;
