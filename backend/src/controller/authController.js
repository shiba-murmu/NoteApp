const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const userRepo = require("../repo/userRepo");
// =======================
// Register new user
// =======================
const registerUser = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;

    // +++++++++++++++++++++
    // Validate required fields
    // +++++++++++++++++++++

    if (!name || !email || !password || !gender) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // +++++++++++++++++++++
    // Check if user already exists
    // +++++++++++++++++++++

    const existingUser = userRepo.findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // +++++++++++++++++++++
    // Hash password
    // +++++++++++++++++++++

    const hashedPassword = await bcrypt.hash(password, 12);

    // +++++++++++++++++++++
    // Create user
    // +++++++++++++++++++++
    const userId = userRepo.createUser(name, email, hashedPassword, gender);

    // +++++++++++++++++++++
    // Get created user
    // +++++++++++++++++++++

    const user = userRepo.findUserById(userId);

    // +++++++++++++++++++++
    // Send response
    // +++++++++++++++++++++
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
  }
  return res.status(500).json({
    message: "Something went wrong",
  });
};


// =======================
// Login User
// =======================

const loginUser = async(req, res) => {
    try {
        const {
            email,
            password,
        } = req.body;
        // ===================
        // Validate fields
        //======================

        if (!email || !password) {
            return res.status(400).json({
                message : "Email and password are required.",
            });
        }
        //=================
        // find user
        // ===============

        const user = userRepo.findUserByEmail(email);

        if(!user) {
            return res.status(401).json({
                message : "Invalid email or password.",
            });
        }
        // ===========
        // Compare password
        // ===========

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            return res.status(401).json({
                message : "Invalid email or password.",
            });
        }

        // ================
        // Create JWT
        // ===============

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );
        // =======
        // response
        //==========

        return res.status(200).json({
            message : "Login succesful.",
            token,
            user : {
                id: user.id,
                name: user.name,
                email: user.email,
                gender: user.gender,
            },
        });
    } catch (error) {
        console.error( "Login error:", error);
    }
    return res.status(500).json({
        message : "Something went wrong.",
    });
}
// ++++++++++
// Export
// ++++++++
module.exports = {
  registerUser,
  loginUser
};
