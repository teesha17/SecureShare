import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const Login = async (req, res) => {
  try {
    const { email, signedChallenge } = req.body;
    console.log("Login attempt for:", req.body);
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const publicKey = user.publicKey;

    const challenge = req.session.challenge;
    if (!challenge) return res.status(400).json({ message: "No challenge found" });

    const isValid = crypto.verify(
      "sha256",
      Buffer.from(challenge, "utf8"), 
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: 32, 
      },
      Buffer.from(signedChallenge, "base64")
    );

    if (!isValid) return res.status(401).json({ message: "Invalid signature" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    req.session.challenge = null;

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
