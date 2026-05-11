const db = require('../config/db');

const addSchool = (schoolData, callback) => {

    const sql = `
        INSERT INTO schools
        (name, address, latitude, longitude)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            schoolData.name,
            schoolData.address,
            schoolData.latitude,
            schoolData.longitude
        ],
        callback
    );
};

const getAllSchools = (callback) => {

    const sql = `SELECT * FROM schools`;

    db.query(sql, callback);
};

module.exports = {
    addSchool,
    getAllSchools
};