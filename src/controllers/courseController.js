const client = require("../db/db_config");

const getCourses = async (req, res) => {
    const allCourses = await client.query('SELECT * FROM mydb.courses');

    res.send({ allCourses });
};

const getSpecificCourses = async(req,res) =>{
    const course = await client.query('SELECT * FROM mydb.courses WHERE id = "${req.params.id}"');
    res.send({course});
};
module.exports = {
    getCourses,
}
