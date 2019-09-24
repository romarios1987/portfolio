const express = require('express');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);


const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build ...'
    },
    {
        title: 'SecretData 2',
        description: 'My secret password.'
    }
];

app.prepare()
    .then(() => {
        const server = express();

        server.get('/api/v1/secret', (req, res) => {
            return res.json(secretData);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3000, (err) => {
            if (err) throw  err;
            console.log('> Read on http://localhost:3000');
        })
    }).catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
});