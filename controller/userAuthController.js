import JWT from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { uploadCloud } from "../utils/cloudinaryConfig.js";

export const registerUser = async (req, res) => {
  const { user_name, password, email } = await req.body;

  console.log(user_name, password, email);

  try {
    if (!user_name || !password || !email) {
      return res.send({
        message: "All fields are required",
      });
    }

    const existEmail = await User.findOne({ email: email });

    if (existEmail) {
      return res.send({
        message: "Email already exists",
      });
    }
    const url = await uploadCloud(req.file.path);
    console.log(url);
    const newUser = new User({
      user_name,
      email,
      password,
      avatar: url.secure_url,
    });

    await newUser.save();

    res.send({
      message: "Registration Complete",
      data: newUser,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const existEmail = await User.findOne({ email });

  try {
    if (existEmail) {
      if (password === existEmail.password) {
        const token = JWT.sign({ _id: existEmail._id }, "secret", {
          expiresIn: "10d",
        });
        res.send({
          message: "Login Successful",
          userData: existEmail,
          token: token,
          status: true,
        });
      } else {
        res.send({
          message: "Invalid Password or Email",
        });
      }
    } else {
      res.send({
        message: "Invalid Password or Email",
        status: false,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};
