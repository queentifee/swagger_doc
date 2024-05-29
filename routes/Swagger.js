const express = require ('express');
const router = express.Router();
const collection = require ('../models/Books');

/**
 * @swagger
 * /book:
 *   get:
 *     summary: returns a lists of all books
 *     description: Returns a full list of all books
 *     responses:
 *          200:      
 *            description: Successful
 *            content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "id: 1, title: 'Oliver Twist', author: 'Charles Dickens'"
 *   parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "1"
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         example: "Oliver Twist"
 *       - in: path
 *         name: author
 *         required: true
 *         schema:
 *           type: string
 *         example: "Charles Dickens"
 *       - in: path
 *         name: published_date
 *         required: true
 *         schema:
 *           type: string
 *         example: "1837"
 *       - in: path
 *         name: summary
 *         required: true
 *         schema:
 *           type: string
 *         example: "It follows the story of an orphan boy named Oliver Twist..."
 *  
 */

// Get all books
router.get('/books', async (req, res) => {
    try {
      const books = await collection.find(); // Retrieve all books from the database
      res.json(books); // Return the list of books as JSON
    } catch (err) {
      res.status(500).json({ error: err.message }); // Handle error if any
    }
  });

/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: Retrieve a book by ID
 *     description: Returns a book with specified ID
 *     responses:
 *          200:      
 *            description: Returns the book with the specified ID
 *          400:
 *            description: Book not found
 *            content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "id: 6, title: 'Pride and Prejudice', author: 'Jane Austen'"
 *   parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "6"
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         example: "Pride and Prejudice"
 *       - in: path
 *         name: author
 *         required: true
 *         schema:
 *           type: string
 *         example: "Jane Austen"
 *       - in: path
 *         name: published_date
 *         required: true
 *         schema:
 *           type: string
 *         example: "1813-01-23"
 *       - in: path
 *         name: summary
 *         required: true
 *         schema:
 *           type: string
 *         example: "A romantic novel set in the early 19th century..."
 * 
 */

// Get a book by Id
router.get('/books/:id', async (req, res) => {
  try {
      const book = await collection.findOne({id: req.params.id }); // Find book by ID
      if (!book) {
          return res.status(404).json({ error: 'Book not found' }); // Book with specified ID not found
      }
      res.json(book); // Return the book
  } catch (err) {
      res.status(500).json({ error: err.message }); // Handle error if any
  }
});

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Upload a new book
 *     description: Upload a new book with details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               published_date:
 *                 type: string  
 *               summary:
 *                 type: string
 *     responses:
 *       201:
 *         description: A new book has been uploaded successfully
 *         content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "id: 5, title:'The Catcher in the Rye', author: 'J. D. Salinger'"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "5"
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         example: "The Catcher in the Rye"
 *       - in: path
 *         name: author
 *         required: true
 *         schema:
 *           type: string
 *         example: "J.D. Salinger"
 *       - in: path
 *         name: published_date
 *         required: true
 *         schema:
 *           type: string
 *         example: "1951-07-16"
 *       - in: path
 *         name: summary
 *         required: true
 *         schema:
 *           type: string
 *         example: "A coming-of-age novel narrated by Holden Caulfield, a teenager who str…"
 */

// Post(add) a new book
router.post('/books', async (req, res) => {
  try {
      const newBook = await collection.create(req.body); // Create a new book in the database
      res.status(201).json(newBook); // Return the newly created book
  } catch (err) {
      res.status(400).json({ error: err.message }); // Handle error if any
  }
});

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     description: Returns the updated book specified by ID 
 *     responses:
 *          200:      
 *            description: Book successfully updated
 *          400:
 *            description: Book not found
 *            content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "id: 3, title: 'To kill a Mockingbird', author: 'Harper Lee'"
 *   parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "3"
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         example: "To kill a Mockingbird"
 *       - in: path
 *         name: author
 *         required: true
 *         schema:
 *           type: string
 *         example: "Harper Lee"
 *       - in: path
 *         name: published_date
 *         required: true
 *         schema:
 *           type: string
 *         example: "1960-07-11"
 *       - in: path
 *         name: summary
 *         required: true
 *         schema:
 *           type: string
 *         example: "A story set in the fictional town of Maycomb, ..."
 */

// Update a book by Id
router.put('/books/:id', async (req, res) => {
  try {
      const filter = { id: req.params.id };
      const updatedBook = await collection.findOneAndUpdate(filter, req.body, { new: true }); // Update the book with the specified ID
      if (updatedBook) {
      res.json(updatedBook); // Return the updated book
      } else {
        res.status(404).json({error: 'Book not found'});
      }
  } catch (err) {
      res.status(400).json({ error: err.message }); // Handle error if any
  }
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     description: Delete a book with a specified ID
 *     responses:
 *          200:      
 *            description: Book deleted successfully
 *          400:
 *            description: Book not found
 *            content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                           
 */


// Delete a book by Id
router.delete('/books/:id', async (req, res) => {
  try {
      await collection.findOneAndDelete(req.params.id); // Delete the book with the specified ID
      res.json({ message: 'Book deleted successfully' });
  } catch (err) {
      res.status(400).json({ error: err.message }); // Handle error if any
  }
});


module.exports = router;