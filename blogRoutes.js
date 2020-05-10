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
            res.status(201).send(addPost)
        }
    } catch {
        res.status(500).json({ error: "There was an error while saving the post to the database" })
    }
})
    // DELETE a post
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const idToBeDeleted = await db.remove(id) // why does it send back number
    try {
        if (idToBeDeleted === 0) {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
            else {
                console.log(idToBeDeleted)
                res.send( `You have deleted ID: ${id}`)
        }
    } catch {
        res.status(500).json({ error: "The post could not be removed" });
    }
})

//UPDATE a post
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const postToUpdate = await db.update(id, changes) // why does it send back number
    try {
        if (req.body.title === '' || req.body.contents === '') {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        } else if (postToUpdate === 0 ) {
            res.status(404).send({ message: "The post with the specified ID does not exist." })
        }

        else {
            res.status(200).send(changes);   
        }
    } catch {
        res.status(500).json({ error: "The post information could not be modified." })
    }
})

// GET post by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let post = await db.findById(id)
    try {
        if (post.length === 0) {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
            //this error message handler won't show up
        }
        return res.status(200).send(post)
    } catch {
        res.status(500).json({ error: "The post information could not be retrieved." })
    }
})
// POST a new comment for specific ID
router.post('/:id/comments', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.insertComment(changes)
    let findPostByID = await db.findById(id)
    
    try {
        if (findPostByID.length == 0) {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
        //error for must have text
        else if (req.body.text === '') {
            res.status(400).json({ errorMessage: "Please provide text for the comment." });
        } else {
            res.status(200).send(changes) 
        } 
    } catch {
        res.status(500).json({ error: "There was an error while saving the comment to the database" })
    }
})


//GET comments of a specific post
router.get('/:id/comments', async (req, res) => {
    const { id } = req.params;
    const findComments = await db.findPostComments(id);
    try {
        let post = await db.findById(id)
        console.log(post)
        if (post.length === 0) {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        } else {
            res.status(200).send(findComments);
        }
    } catch {
        res.status(500).json({ error: "The comments information could not be retrieved." })
    }
})

module.exports = router;