const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("index", { title: "Kristina Carlsen" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Me" });
});

router.post(
  "/",
  [
    check("name").isLength({ min: 1 }).withMessage("Please enter a name"),
    check("email").isLength({ min: 1 }).withMessage("Please enter an email"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send("Thank you for your email! I will get back to you soon.");
    } else {
      res.render("contact", {
        title: "Contact Me",
        errors: errors.array(),
        data: req.body,
      });
    }
    console.log(req.body);
    res.render("contact", { title: "Contact Me" });
  }
);

module.exports = router;
