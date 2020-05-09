const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('GET Posts is working')
});

router.post('/', (req, res) => {
    res.status(200).send('POST Posts is working')
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