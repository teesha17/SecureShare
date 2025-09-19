import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// Generate RSA keys
function generateRSAKeys() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
  return { publicKey, privateKey };
}

export const Signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generate keypair
    const { publicKey, privateKey } = generateRSAKeys();

    // save user with publicKey
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      publicKey,
      // ⚠️ don't store privateKeyHash at all
    });

    await newUser.save();

    // return private key ONCE (tell client to store securely)
    res.status(201).json({
      message: "Signup successful",
      privateKey: privateKey, // PEM format
    });

  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Server error during signup" });
  }
};
