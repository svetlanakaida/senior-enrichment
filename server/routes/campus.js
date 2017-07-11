'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;
const Student = models.Student;
module.exports = router;

router.get('/', function (req, res, next) {

    Campus.findAll()
        .then(function (campuses) {
            res.send(campuses);
        })
        .catch(next);

});


router.get('/:id', function (req, res, next) {
    Campus.findOne({
        where: {
           id: req.params.id

        }
    })
        .then(function (campus) {

            if (!campus) {
                res.sendStatus(404);
            } else {
                res.send(campus);
            }
        })
         .catch(next);

});


router.get('/:campusId/students', function (req, res, next) {

   Student.findAll({
       where: {
           campusId: req.params.campusId
       }
   })
        .then(function (students) {
            res.send(students);
        })
        .catch(next);

});



router.post('/', function (req, res, next) {
   Campus.create({ name: req.body.name })
        .then(function (campus) {
            res.status(201).send(campus);
        })
        .catch(next);
});


router.put('/:id', function (req, res, next) {
    if(!req.params.id){
        res.sendStatus(500);
    }
    Campus.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(campus =>{
        if(!campus) {res.sendStatus(404)};
        return campus.update({name: req.body.name})
    })
    .then(campus =>{
        res.json(campus);
    })
    .catch(next)
});

router.delete('/:id', function (req, res, next) {
    if (!req.params.id) {
        res.sendStatus(500);
    }
    Campus.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function (campus) {
            if (!campus) { res.sendStatus(404) };
            return campus.destroy({})
        })
        .then(function (campus) {
            res.sendStatus(204);
        })
        .catch(next)
});


