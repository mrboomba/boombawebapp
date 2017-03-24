var express = require('express');
var router = express.Router();
var Student = require('../models/student');

/* GET home page. */
router.get('/', function(req, res) {
	res.end("Hello World");
 
});
router.post('/add',function(req,res){

	var name = req.body.name;
	var id = req.body.id;

	Student.create({'name':name,'student_id':id},function(err){
		if(err){
			res.status(500).json({
				message: err
			});
		}
		res.redirect("/api/gmine");
	})

});
router.get('/gmine',function(req, res){
	Student.find({},function(err,student){
		if(err){
			res.status(500).json({
				message: err
			});
		}
		res.status(200).json({
				name: student[0].name,
				id: student[0].student_id
		});
	})
});

router.get('/boom',function(req, res){
	Student.find({name:'boom'},function(err,student){
		if(err){
			res.status(500).json({
				message: err
			});
		}
		res.status(200).json({
				student: student
				
		});
	})
});


module.exports = router
