const express = require('express');

const router = express.Router();

const db = require('./data/db');

//get all posts

router.get('/', async (req, res) => {
    const answer = await db.find();
    try {
        res.status(200).send(answer)
    } catch {
        res.status(500).json({ error: "The posts information could not be retrieved." })
    }
});

//post a new post to the database
router.post('/', async (req, res) => {
    const newPost = req.body;
    try {
        if (req.body.title === '' || req.body.contents === '') {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        }
        else {
            const addPost = await db.insert(newPost);
            console.log(addPost);
            res.status(201).send(addPost)
        }
    } catch {
        res.status(500).json({ error: "There was an error while saving the post to the database" })
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`DELETE Post ${id} is working`)
})
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`PUT Post ${id} is working`)
})
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`GET Post ${id} is working`)
})

router.post('/:id/comments', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`POST Comments for Post ${id} is working`)
})

router.get('/:id/comments', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`GET Post Comments for ${id} is working`)
})

module.exports = router;