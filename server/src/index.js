const express = require('express');

const webapp = express();
const PORT = 2022;

myAppList = [
    {
        type: 'FinTech',
        companyName: 'Stripe',
        status: 'under review',
    },
    {
        type: 'Software',
        companyName: 'Microsoft',
        status: 'interviewed',
    },
];

webapp.use(express.json());
webapp.use(express.urlencoded());

webapp.listen(PORT, () => console.log('Running the server on Port ${PORT}!'));

webapp.get('/trackmyapp', (request, response) => {
    response.send(myAppList);
});

webapp.post('/trackmyapp', (request, response) => {
    console.log(request.body);
    myAppList.push(request.body);
    response.send('Successfully Received!');
});