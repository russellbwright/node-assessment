const userData = require('./userData.json');

module.exports = {



    getUsers: (req,res,next) => {
        
        let users = userData

        if(req.query.favorites){

          let favs = users.filter((e) => {
              if(e.favorites.includes(req.query.favorites)){
                  return e
              }
          })
           res.status(200).json(favs);
        }
        if(req.query.age){
            let ageArr = [];
               for (let i =0; i < users.length; i++){
                   if(users[i].age < req.query.age){
                       ageArr.push(users[i])
                   }
               }
               res.status(200).json(ageArr);
           }
           if(req.query.email){
            let emailArr = [];
                for(let i=0; i < users.length; i++){
                    if(users[i].email === req.query.email){
                        emailArr.push(users[i])
                    }
                }
            res.status(200).json(emailArr);
        }
        if(req.query.lastname){
            let lastNames = users.filter(function(e){
                if(e.last_name ===  req.query.lastname){
                    return e
                }
            })
            res.status(200).json(lastNames);
        }
           
        return res.status(200).json(userData)

        },    

    
        getUserId: (req,res,next) => {
            if(parseInt(req.params.userId) <= 100){
                    let getId = users.filter(function(e){
                        if(e.id === parseInt(req.params.userId)){
                            return e
                        }
                    })
                    return res.status(200).json(getId[0])
                } else {
                 res.status(404).json(null)
                }
            },
    
            getAdmins: (req, res, next) => {
                let admin = users.filter(function(e){
                    if(e.type === "admin"){
                        return e
                    }
                })
                res.status(200).json(admin);
            },
        
        
            getNonAdmins: (req, res, next) => {
                let nonAdmin = users.filter(function(e){
                    if(e.type !== "admin"){
                        return e
                    }
                })
                res.status(200).json(nonAdmin);
            },
        
            getUserType: (req,res,next) => {
                let getTypes = users.filter(function(e){
                    if(e.type === req.params.userType){
                        return e
                    }
                })
                res.status(200).json(getTypes)
            },
        
            updateUser: (req,res,next) => {
                for(var i = 0; i < users.length; i++){
                    if(users[i].id == req.params.userId){
                        users[i] = req.body
                    }
                }
                res.status(200).json(users)
            },
        
            // updateUser: (req,res,next) => {
                
            // }
            newUser: (req,res,next) => {
                let id = users.length + 1;
                req.body.id = id;
                users.push(req.body);
                res.status(200).json(users);
            },
        
            deleteUser: (req,res,next) => {
                for( var i =0; i < users.length; i++){
                    if(users[i].id == req.params.userId){
                       users.splice([i], 1)
                    }
                }
                res.status(200).json(users)
            }



    }









       



    


