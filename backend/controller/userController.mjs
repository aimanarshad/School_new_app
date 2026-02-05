import bcrypt from "bcrypt";
import User from "../models/user.model.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
// import userSchema from "../schema/userSchema.mjs";

const login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const checkPassword = bcrypt.compareSync(password, user.password);

      if (checkPassword) {
        var token = JWT.sign({ userId: user._id }, process.env.JWT_TOKEN);

        res
          .status(200)
          .json({ status: 200, message: "Login Successfull", user, token });
      } else {
        res.status(401).json({ status: 401, message: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ status: 404, message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err, status: 400 });
  }
};


const signUp = async (req, res) => {
  
  if (!req.body) {
    return req.status(400).json({ message: "Bad request! Empty body" });
  }
  try {
    // const user = await userSchema.validateAsync(req.body);
    const user = await req.body;
    const password = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ ...user, password: password });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser.id, email: newUser.email },
    });

  } catch (error) {

    if (error?.code === 11000) {
      return res.status(409).json({
        message: "Duplicate email - Email already exists",
        error: error.message,
      });
    }

    console.error("Signup Error:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });

  }
};

export { login, signUp };