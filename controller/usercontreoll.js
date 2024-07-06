
const credential={
    email:"admin@gmail.com",
    password:"121212"
}

const loginpost = (req, res) => {
  if (
    req.body.email == credential.email &&
    req.body.password == credential.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/route/dashbord");
    //  res.end("Login successful...!");
  } else {
    res.end("invalid Username");
  }
};

module.exports = {
  loginpost,
};
