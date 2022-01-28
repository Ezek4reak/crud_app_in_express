var Userdb = require('../model/model');


//create and save new user
exports.create = (req, res) => {
    //validate input request
    if(!req.body){
        res.status(400).send({message: 'Cannot submit empty form'});
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //save user in the database
    user.save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occoured while creating the user"
            });
        });
}

//retrieve and return all users/ retrieve and return single user
exports.find = (req, res) => {
    if(req.query.id){
        //TODO
        const id = req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot find user with id ${id}`});
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving users with id "+id
            });
        });
        
    }else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occoured while retrieving users information"
            });
        });
    }


}

//Update an an identified user by id
exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'Data to update cannot be empty'});
        return 3;
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot Update user with id ${id}, Maybe user not found`});
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating users information"
        });
    });
}

//delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot Delete user with id ${id}, Maybe user not found`});
        }else{
            // res.redirect('/')
            res.send({
                message: "User deleted successfully"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error deleting users"
        });
    });

} 