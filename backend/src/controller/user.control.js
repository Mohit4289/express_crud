import User from "../models/user.model.js"

export const users = async (req,res) => {
    const data = await User.find()
    try {
        if(data.length == 0){
            return res.status(401).json({message: 'data base is blank'})
        }
        console.log(data.length)
        return res.status(200).json({message: "you data succesfully extracted", data})
    } catch (error) {
        console.log("data not extracted code eror", error)
        res.status(500).json({message: 'something went wrong'})
    }
} 

export const signup = async (req,res) => {
    const {username, email, password} = await req.body

    try {
        const existuser = await User.findOne({email: email})
        
        if (existuser){
            return res.status(401).json({message: "user already exist"})
        }

        const createuser = await User.create({
            username: username,
            email: email,
            password: password
        })

        res.status(200).json({message: "succesfully user created"})

    } catch (error) {
        console.log("data not posted code eror", error)
        res.status(500).json({message: 'something went wrong'})
    }
    
}

export const login = async (req,res) => {
    const {username, email, password} = await req.body

    try {
        const checkuser = await  User.findOne({email: email});

        if(!checkuser){
            return res.status(401).json({message: "user doesnt exist"})
        }

        const checkpass = await password === checkuser.password

        if(!checkpass){
            return res.status(401).json({message: "password is wrong"})
        }

        res.status(200).json({message: "sucessfully logined"})

    } catch (error) {
        console.log("data not posted code eror", error)
        res.status(500).json({message: 'something went wrong'})
    }
}

export const update = async (req,res) => {
    const {id} = await req.params

    try {
        const finduser = await User.findByIdAndUpdate(id, req.body)
        if (!finduser){
            return res.status(500).json({message: "this user not exist in database"})  
        }

        const updateuser = await User.findById(id);
        res.status(200).json({message: "your data is updated succesfully", updateuser})

    } catch (error) {
        console.log("data is not updated code eror", error)
        res.status(500).json({message: 'data not updated'})
    }
}

export const deleteuser = async (req,res) => {
    const {id} = await req.params

    try {
        const finduser = await User.findByIdAndDelete(id, req.body)
        if (!finduser){
            return res.status(500).json({message: "this user not exist in database"})  
        }

        const deleteuser = await User.findById(id);
        res.status(200).json({message: "your data is deleted succesfully", deleteuser})

    } catch (error) {
        console.log("data is not updated code eror", error)
        res.status(500).json({message: 'data not deleted'})
    }
}