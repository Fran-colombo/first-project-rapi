# REST API Project

## Description

This project is a simple REST API built with Node.js, Express.js, and SQLite. It provides endpoints to manage and retrieve information.

## Features

- Create new information
- Retrieve all information
- Retrieve information by ID
- Update existing information

## How It Works

1. **Installation**
   - Clone this repository: `git clone https://github.com/your_username/your_project.git`
   - Navigate to the project directory: `cd your_project`
   - Install dependencies: `npm install`

2. **Starting the Server**
   - Run the server: `node index.js`
   - The server will start at `http://localhost:3000`

3. **Endpoints**
   - `GET /info`: Retrieve all information.
   - `GET /info/:id`: Retrieve information by ID.
   - `POST /info`: Create new information.
   - `PUT /info/:id`: Update existing information.

4. **Using Postman**
   - Open Postman and make requests to the above endpoints with the appropriate HTTP methods (GET, POST, PUT).

5. **Frontend (Optional)**
   - If you have a frontend, place it in the `frontend` folder and adjust the necessary routes.

## Dependencies

- Express.js
- SQLite3

## File Structure
* /
  * /Backend
    *   index.js
    *   database.js
  * /Frontend 
    *   /views
        *   addInfo.ejs
        *   info.ejs 
  * /public
    *   styles.css

        

## Additional Notes

- You may customize the project to fit your specific requirements.
- For more details, refer to the source code and comments.
