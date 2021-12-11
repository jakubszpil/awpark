const express = require("express");
const app = express();
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 4000;
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");

const initializePassport = require("./passportConfig");

initializePassport(passport);

app.use(express.urlencoded({ extended: false }));

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/dashboard", checkNotAuthenticated, (req, res) => {
  res.render("dashboard", { user: req.body.name });
});

app.get("/users/register", checkAuthenticated, (req, res) => {
  res.send("register");
});

app.get("/login", checkAuthenticated, (req, res) => {
  res.send("login");
});

app.get("/logout", (req, res) => {
  req.logOut();
  req.flash("success_msg", "You are logged out!");
  res.redirect("/login");
});

app.post("/signup", async (req, res) => {
  let { password, name, surname, email } = req.body;

  console.log({ password, name, surname, email });
  console.log(req);
  let errors = [];

  // if (!name || !email || !surname || !password) errors.push({message: "Please enter all fields!"});
  //
  // if (password.length < 6) errors.push({message: "Password should be at least 6 characters."});

  if (errors.length > 0) {
    res.send({ errors });
  } else {
    // let hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    pool.query(
      `SELECT *
             FROM users
             WHERE email = $1`,
      [email],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log("REACHES HERE");
        console.log(results.rows);

        if (results.rows.length > 0) {
          errors.push({ message: "Email already exists!" });
          res.render("Register", { errors });
        } else {
          pool.query(
            `INSERT INTO users (password, name, surname, email)
                         VALUES ($1, $2, $3,
                                 $4) RETURNING id, password`,
            [password, name, surname, email],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
              req.flash("success_msg", "You are now registered. Please log in");
              res.redirect("/login");
            }
          );
        }
      }
    );
  }
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
