const { body, query } = require('express-validator');

const addSchoolValidation = [

    body('name')
        .notEmpty()
        .withMessage('Name is required'),

    body('address')
        .notEmpty()
        .withMessage('Address is required'),

    body('latitude')
        .isFloat({ min: -90, max: 90 })
        .withMessage('Valid latitude is required'),

    body('longitude')
        .isFloat({ min: -180, max: 180 })
        .withMessage('Valid longitude is required')
];

const listSchoolValidation = [

    query('latitude')
        .isFloat({ min: -90, max: 90 })
        .withMessage('Valid latitude is required'),

    query('longitude')
        .isFloat({ min: -180, max: 180 })
        .withMessage('Valid longitude is required')
];

module.exports = {
    addSchoolValidation,
    listSchoolValidation
};