import express from "express";
const router = express.Router();
router.use(express.json());

// router.get("/usertest", (req, res) => {
//     res.send ("test okay to proceed");
// });


// router.post ("/userpost", (req,res) => {
//     const username = req.body.username;
//     res.send("your username is: " +username)
// });


export default router;
