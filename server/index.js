const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");




//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a user

app.post("/users", async(req, res) => {
    try {
        
        const {Email} = req.body;
        const {password} = req.body;
        const {name} = req.body;
        const newUser = await pool.query("INSERT INTO logger (password, Email, name) VALUES($1 ,$2, $3) RETURNING * ", 
        [password, Email, name]);

        res.json(newUser);

    } catch (err) {
        console.error(err.message)
    }
});


//get all users

app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM logger");

        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message)
    }
});


//get a user 

app.get("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const users = await pool.query(
            "SELECT * FROM logger WHERE logger_id = $1", 
            [id]
        );
        res.json(users.rows[0]);
    } catch (err){
        console.error(err.message)
    }
})

//update a user

app.put("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const { Email, password } = req.body;
        const updateUser = await pool.query(
            "UPDATE logger SET description = $1 WHERE logger_id = $2" , 
            [Email, password, id]);

        res.json("User was updated")
    } catch (err) {
        console.error(err.message)
    }
})


//delete a user

app.delete("/users/:id", async(req,res) => {
    try {
        
        const {id} = req.params;
        const deleteUser = await pool.query(
            "DELETE FROM logger WHERE logger_id = $1", 
            [ id ]);
            res.json("User was deleted")

    } catch (err) {
        console.error(err.message)
        
    }
})


app.listen(8000, () => {
    console.log("server has started on port 8000")
})