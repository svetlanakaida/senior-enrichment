'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;
const Student = models.Student;
module.exports = router;

router.get('/', function (req, res, next) {
    Campus.findAll()
    .then(campus => res.json(campus))
    .catch(next);

});


router.get('/:campusId', function (req, res, next) {
    Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});


router.get('/:campusId/students', function (req, res, next) {
const campusId = req.params.campusId;

  Student.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
});



router.post('/', function (req, res, next) {
   Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});


router.put('/:campusId', function (req, res, next) {
    Campus.findById(req.params.campusId)
    .then(campus =>{
        if(!campus) {res.sendStatus(404)};
        return campus.update({name: req.body.name})
    })
    .then(campus =>{
        res.send(campus);
    })
    .catch(next)
});

router.delete('/:campusId', function (req, res, next) {
    const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


