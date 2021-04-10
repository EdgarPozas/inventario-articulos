/// Initialize dependencies
const express=require("express");
const app=express();
/// Defining a router
const router=express.Router();
/// Import function
const userFunctions=require("../functions/user-functions");

/// Route GET /api/user
/// Return all users
router.get("/",async (req,res)=>{
    try{
        let values=await userFunctions.all();
        res.json(values);
    }catch(ex){
        console.log(ex);
        res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route GET /api/user/id/:id
/// Return user by id
router.get("/id/:id",async (req,res)=>{
    try{
        let values=await userFunctions.getById(req.params.id);
        res.json(values);
    }catch(ex){
        console.log(ex);
        res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route GET /api/user/emai/:id
/// Return user by email
router.get("/email/:email",async (req,res)=>{
    try{
        let values=await userFunctions.getByEmail(req.params.email);
        res.json(values);
    }catch(ex){
        console.log(ex);
        res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route POST /api/user/login
/// Login
router.post("/login",async (req,res)=>{
    try{
        let values=await userFunctions.login(req.body.email,req.body.password);
        res.json(values);
    }catch(ex){
        console.log(ex);
        res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route POST /api/user
/// Create new user
router.post("/",async (req,res)=>{
    try{
        let userValues=await userFunctions.getByEmail(req.body.email);
        if(userValues.status==200)
            throw Error("Email registered")

        let values=await userFunctions.create(req.body);
        res.json(values);
    }catch(ex){
        console.log(ex);
        res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route PUT /api/user/:id
/// Update user
router.put("/:id",async (req,res)=>{
    try{
        let userValues=await userFunctions.getByEmail(req.body.email);
       
        if(userValues.status==200){
            if(req.body.email!=userValues.user.email){
                throw Error("Email registered")
            }
        }
        
        let values=await userFunctions.update(req.params.id,req.body);
        res.json(values);
    }catch(ex){
        console.log(ex);
        res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route GET /api/user/verify/:id
/// Verify user
router.get("/verify/:id",async (req,res)=>{
    try{
        let values=await userFunctions.verify(req.params.id);
        res.json(values);
    }catch(ex){
        console.log(ex);
         res.json({
            status:400,
            msg:ex
        });
    }
});

/// Route DELETE /api/user/:id
/// Delete user
router.delete("/:id",async (req,res)=>{
    try{
        let values=await userFunctions.delete(req.params.id);
        res.json(values);
    }catch(ex){
        console.log(ex);
         res.json({
            status:400,
            msg:ex
        });
    }
});

/// Export module
module.exports=router;
