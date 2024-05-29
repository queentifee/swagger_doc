Book API
This project is a CRUD (Create, Read, Update, Delete) API for managing books. It allows users to perform operations such as adding new books, retrieving existing books, updating book details, and deleting books from a database. The API is built using Node.js, Express.js, and MongoDB, and it includes documentation generated with Swagger.

Features
CRUD Operations: Allows users to perform Create, Read, Update, and Delete operations on book records.
Swagger Documentation: Provides detailed API documentation using Swagger UI, making it easy for developers to understand and interact with the API endpoints.
MongoDB Integration: Uses MongoDB as the database backend for storing book records.
Error Handling: Includes error handling to gracefully handle unexpected errors and provide appropriate error responses to clients.
Validation: Implements validation to ensure that incoming requests meet the expected criteria and reject invalid requests.

INSTALLATION
Clone the repository
git clone https://github.com/queentifee/swagger_doc.git
Navigate to the project directory:
cd book-api

Install dependencies:
npm install

Start the server:
npm start

Access the API documentation at http://localhost:4000/api-docs

API Endpoints
GET /books: Retrieve a list of all books.
GET /books/:id: Retrieve details of a specific book by its ID.
POST /books: Add a new book to the database.
PUT /books/:id: Update details of a specific book by its ID.
DELETE /books/:id: Delete a book from the database by its ID.
