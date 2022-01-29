const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
    .then((response) => {
        //console.log(response.data);
        res.render('index', {users:response.data});
    })
    .catch(err => {
        // res.send(err)
        res.render('errors', {error: "Some error occoured while retrieving users information"});
    });


    
}

exports.addUser = (req, res) => {
    res.render('add_user');
}

exports.updateUser = (req, res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data});
    })
    .catch(err => {
        // res.send(err)
        res.render('errors', {error: `Could not fetch user with id "${req.query.id}" from the database`});
    });
}


// exports.deleteUser = (req, res) => {
//     res.redirect('/');
//}