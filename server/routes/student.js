'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Student = models.Student;
module.exports = router;

router.get('/', function (req, res, next) {
if(req.query.campusId){
    Student.findAll({where: {campusId: req.query.campusId}})
        .then(function(students){
            res.send(students);
        })
    }
    else {
    Student.findAll()
        .then(function (students) {
            res.send(students);
        })
        .catch(next);
    }
});

router.get('/:id', function (req, res, next) {
    Student.findOne({
        where:{
        id: req.params.id
        }
    })
        .then(function (student) {

            if (!student) {
                res.sendStatus(404);
            } else {
                res.send(student);
            }
        })
         .catch(next);

});

router.post('/', function (req, res, next) {
   Student.create({
        name: req.body.name,
        email: req.body.email,
        campusId: req.body.campusId })
        .then(function (student) {
            res.status(201).send(student);
        })
        .catch(next);
});

router.put('/:id', function (req, res, next) {
    if(!req.params.id){
        res.sendStatus(500);
    }
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(student =>{
        if(!student) {res.sendStatus(404)};
        return student.update({name: req.body.name, email: req.body.email})
    })
    .then(student =>{
        res.send(student);
    })
    .catch(next)
});

router.delete('/:id', function (req, res, next) {
    if (!req.params.id) {
        res.sendStatus(500);
    }
   Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function (student) {
            if (!student) { res.sendStatus(404) };
            return student.destroy({})
        })
        .then(function (student) {
            res.sendStatus(204);
        })
        .catch(next)
});
