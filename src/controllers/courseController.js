const client = require("../db/db_config");

const getCourses = async (req, res) => {
    const allCourses = await client.query('SELECT * FROM mydb.courses');

    res.send({ allCourses });
};

const getSpecificCourses = async(req,res) =>{
    const course = await client.query('SELECT * FROM mydb.courses WHERE id = "${req.params.id}"');
    res.send({course});
};

const deleteCourse = async(req,res) =>{
    const course = await client.query('DELETE * FROM mydb.courses WHERE id = "${req.params.id}"');
    res.send({
        message:'The course has been deleted!',
        deleteCourse:course
    });
}

const addCourse = async(req,res) =>{
    
}
module.exports = {
    getCourses,
    getSpecificCourses,
    deleteCourse,
}
