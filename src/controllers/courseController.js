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
    const allProperties = Object.keys(req.body).length;
    if(allProperties!=4)
    {
        res.code(400)({
            error: 'Some properties are missing. Add the name , description , author , link'
        });
        return;
    }
    try {
        const newCourse = await client.insert({
            table:'courses',
            records:[
                {
                    name:req.body.name,
                    description:req.body.description,
                    author:req.body.author,
                    link:req.body.link
                }
            ]
        });
        res.send({newCourse});
    } catch (error) {
        res.send({error});
    }
};
module.exports = {
    getCourses,
    getSpecificCourses,
    deleteCourse,
    addCourse,
    editCourse
}
