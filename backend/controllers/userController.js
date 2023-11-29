// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    try {
        const { username, first_name, last_name, email, password, phone_number } = req.body;

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send({ message: 'Email already in use.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            username,
            first_name,
            last_name,
            email,
            password: hashedPassword,
            phone_number
        });

        
        // Log the user in or send a token (depending on your auth method)
        req.session.userId = user.user_id;

        res.status(201).send({ userId: user.user_id, message: 'User registered successfully.' });

    } catch (error) {
        res.status(500).send({ message: 'Registration failed.', error });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: 'Incorrect password.' });
        }

        // Log the user in or send a token
        req.session.userId = user.user_id;

        res.send({ userId: user.user_id, message: 'Logged in successfully.' });

    } catch (error) {
        res.status(500).send({ message: 'Login failed.', error });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.session.userId, {
            attributes: ['user_id', 'username', 'first_name', 'last_name', 'email', 'phone_number']
        });
        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }

        res.send(user);

    } catch (error) {
        res.status(500).send({ message: 'Fetching profile failed.', error });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const { username, first_name, last_name, email, phone_number } = req.body;

        // Fetch and update user
        const user = await User.findByPk(req.session.userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }

        user.username = username;
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.phone_number = phone_number;

        await user.save();

        res.send({ message: 'Profile updated successfully.' });

    } catch (error) {
        res.status(500).send({ message: 'Updating profile failed.', error });
    }
};


exports.listUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: 'Error listing books.', error });
    }
};

// ... other controller functions as needed
