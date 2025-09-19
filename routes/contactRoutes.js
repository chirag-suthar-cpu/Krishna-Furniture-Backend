const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { createContact } = require('../controllers/contactController');

// Validation matches frontend form
router.post(
  '/',
  [
    body('firstName').trim().notEmpty().withMessage('First name required'),
    body('lastName').trim().notEmpty().withMessage('Last name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('message').trim().notEmpty().withMessage('Message required'),
  ],
  createContact
);

module.exports = router;
