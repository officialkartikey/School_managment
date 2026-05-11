const express = require('express');

const router = express.Router();

const schoolController = require('../controllers/schoolController');

const validate = require('../middlewares/validationMiddleware');

const {
    addSchoolValidation,
    listSchoolValidation
} = require('../validators/schoolValidator');

router.post(
    '/addSchool',
    addSchoolValidation,
    validate,
    schoolController.addSchool
);

router.get(
    '/listSchools',
    listSchoolValidation,
    validate,
    schoolController.listSchools
);

module.exports = router;