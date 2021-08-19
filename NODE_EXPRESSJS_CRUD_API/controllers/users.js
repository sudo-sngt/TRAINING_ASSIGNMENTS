import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) =>{
    
    res.send(users);
    
}

export const createUser =  (req, res) =>{
    const user = req.body;
    
    users.push({...user, id: uuidv4()});

    res.send(`user with the name ${user.name} added to the database`);
}

export const getUser =  (req, res) =>{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser =  (req, res) =>{
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`user with the id ${id} deleted from the databases.`) 
}

export const updateUser = (req, res) =>{
    const { id } = req.params;
    const {name, password, gender, birthdate, age, country, phone} = req.body;
    const user = users.find((user) => user.id === id);

    if(name) user.name = name;
    if(password) user.password = password;
    if(gender) user.gender = gender;
    if(birthdate) user.birthdate = birthdate;
    if(age) user.age = age;
    if(country) user.country = country;
    if(phone) user.phone = phone;

    res.send(`User with the id ${id} has been updated.`);
}
