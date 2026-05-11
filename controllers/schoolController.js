const schoolService = require('../services/schoolService');

const addSchool = (req, res) => {

    const schoolData = req.body;

    schoolService.createSchool(schoolData, (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: 'Failed to add school',
                error: err
            });
        }

        res.status(201).json({
            success: true,
            message: 'School added successfully',
            data: result
        });
    });
};

const listSchools = (req, res) => {

    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);

    schoolService.listSchools(
        userLatitude,
        userLongitude,
        (err, schools) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: 'Failed to fetch schools',
                    error: err
                });
            }

            res.status(200).json({
                success: true,
                count: schools.length,
                data: schools
            });
        }
    );
};

module.exports = {
    addSchool,
    listSchools
};