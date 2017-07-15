'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Student = models.Student;
const Campus = models.Campus;

module.exports = router;


router.get('/', function (req, res, next) {
    if (req.query.campusId){
        Student.findAll({where: {campusId: req.query.campusId}})
            .then(students => {res.json(students);
            })
            .catch(next);
    }
    else {
        Student.findAll({
      include: {
        model: Campus,
        as: 'campus'
      }
    })
       .then(students => {res.json(students);
            })
       .catch(next);
    }
});

router.get('/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    },
    include: {
      model: Campus,
      as: 'campus'
    }
  }).then(student => {
    res.json(student);
  })
    .catch(next);
});

router.post('/', function (req, res, next) {
   Student.create({
        name: req.body.name,
        email: req.body.email,
        campusId: req.body.campusId})
        .then(student => res.status(201).send(student))
        .catch(next);
});

router.put('/:studentId', function (req, res, next) {
   Student.findById(req.params.studentId)
    .then(student => {
        if (!student ) { res.sendStatus(404) };
        return student.update({name: req.body.name, email: req.body.email,
        campusId: req.body.campusId} )
    })
    .then(student => {
        res.send(student);
    })
    .catch(next)
});

router.delete('/:studentId', function (req, res, next) {
const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


