const schoolModel = require('../models/schoolModel');
const calculateDistance = require('../utils/distanceCalculator');

const createSchool = (schoolData, callback) => {

    schoolModel.addSchool(schoolData, callback);
};

const listSchools = (userLatitude, userLongitude, callback) => {

    schoolModel.getAllSchools((err, schools) => {

        if (err) {
            return callback(err);
        }

        const sortedSchools = schools.map((school) => {

            const distance = calculateDistance(
                userLatitude,
                userLongitude,
                school.latitude,
                school.longitude
            );

            return {
                ...school,
                distance: distance.toFixed(2)
            };

        }).sort((a, b) => a.distance - b.distance);

        callback(null, sortedSchools);
    });
};

module.exports = {
    createSchool,
    listSchools
};