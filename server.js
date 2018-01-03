const express = require('express');
const bodyParser = require('body-parser');

const usersCtrl = require('./usersCtrl.js');

const port = 3000;
const app = express();


app.use(bodyParser.json());




app.get('/api/users', usersCtrl.getUsers);
app.get('/api/users/:userId', usersCtrl.getUserId);
app.get('/api/admins', usersCtrl.getAdmins)
app.get('/api/nonadmins', usersCtrl.getNonAdmins)
app.get('/api/user_type/:userType', usersCtrl.getUserType)

app.put('/api/users/:userId', usersCtrl.updateUser)

app.post('/api/users', usersCtrl.newUser)

app.delete('/api/users/:userId', usersCtrl.deleteUser)


app.listen(port, () => {
    console.log(`listening to Port ${port}`)
})