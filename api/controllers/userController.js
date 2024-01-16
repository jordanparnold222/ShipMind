const express = require('express')
// User Controller
const getUserDetails = (req, res) => {
    // Will eventually interact with 'user' model
    // For now, just hard code a dummy user for response
    const userDetails = { id: req.params.userId, name: "Jordan Arnold"};
    res.json(userDetails)
};

module.exports = {
    getUserDetails,
};