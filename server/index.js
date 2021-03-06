const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);
const config = require('./config');


// Service
const authService = require('./services/auth');


// Routes
const portfolioRoutes = require('./routes/portfolio');


// robotsOptions
const robotsOptions = {
    root: path.join(__dirname, '../static'),
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
    }
};


// Connect to MONGO_DB
// mongoose.connect(config.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log('Database connected ...')
//     }).catch((err) => {
//     console.error(err)
// });


(async () => {
    try {
        await mongoose.connect(config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true,});
        console.log('MongoDb Connected...');
    } catch (err) {
        console.log('error: ' + err);
        process.exit(1);
    }
})();


app.prepare()
    .then(() => {
        const server = express();

        server.use(express.json());


        server.use('/api/v1/portfolio', portfolioRoutes);

        server.get('/robots.txt', (req, res) => {
            return res.status(200).sendFile('robots.txt', robotsOptions);
        });


        // server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
        //     return res.json(secretData);
        // });
        // server.get('/api/v1/site-owner', authService.checkJWT, authService.checkRole('admin'), (req, res) => {
        //     return res.json(secretData);
        // });


        server.get('*', (req, res) => {
            return handle(req, res);
        });


        server.use((err, req, res, next) => {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({
                    title: 'Unauthorized',
                    details: 'Unauthorized Access'
                });
            }
        });


        const PORT = process.env.PORT || 3000;

        server.listen(PORT, (err) => {
            if (err) throw  err;
            console.log('> Read on port' + PORT);
        })
    }).catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
});