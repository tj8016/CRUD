const User = require('../model/user');

exports.singleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById({_id: id});

        res.status(200).json({
            success : true,
            data : user,
            message : "User fetch successfully"
        });
    }catch(error) {
        console.log(error);
        res.status(400).json(
            {
                success : false,
                message : "User not fetched, Something went wrong"
            }
        )
    }
}

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success : true,
            data : users,
            message : "All Users fetch successfully"
        });
    }catch(error) {
        console.log(error);
        res.status(400).json(
            {
                success : false,
                message : "All Users not fetched, Something went wrong"
            }
        )
    }
}

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body;
        const user = await User.create({name, email});

        res.status(200).json({
            success : true,
            data : user,
            message : "User create successfully"
        });
    }catch(error) {
        res.status(400).json(
            {
                success : false,
                message : "User not created, Something went wrong"
            }
        )
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, email} = req.body;
        const user = await User.findByIdAndUpdate({_id : id}, {name : name, email : email});
        const newuser = await User.findOne({_id : id});

        res.status(200).json({
            success : true,
            olddata : user,
            newdata : newuser,
            message : "User update successfully"
        });
    }catch(error) {
        console.log(error);
        res.status(400).json(
            {
                success : false,
                message : "User not Updated, Something went wrong"
            }
        )
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        // const id = req.body;
        const user = await User.findByIdAndDelete({_id : id});

        res.status(200).json({
            success : true,
            message : "User deleted successfully"
        });
    }catch(error) {
        console.log(error);
        res.status(400).json(
            {
                success : false,
                message : "User not Deleted, Something went wrong"
            }
        )
    }
}