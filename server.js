const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// NEW USER
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.exampleEmail(),
        phoneNumber: faker.phone.number(),
        lName: faker.person.lastName(),
        fName: faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return newUser;
}

// NEW COMPANY
const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
}

// RETURN NEW USER
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// RETURN NEW COMPANY
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// RETURNS BOTH NEW USER & COMPANY
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const userAndCompany = {
        user: newUser,
        company: newCompany
    }
    res.json(userAndCompany)
});

app.listen(port, () => console.log(`Eavesdropping on port: ${ port }`));