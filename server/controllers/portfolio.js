const Portfolio = require('../models/portfolio');


exports.getPortfolio = (req, res) => {
    Portfolio.find({}, (err, allPortfolio) => {
        if (err) {
            return res.status(422).send(err)
        }
        return res.json(allPortfolio)
    })
};


exports.savePortfolio = (req, res) => {
    const portfolioData = req.body;


    const userId = req.user && req.user.sub;
    const portfolio = new Portfolio(portfolioData);
    portfolio.userId = userId;

    portfolio.save((err, createPortfolio) => {
        if (err) {
            return res.status(422).send(err)
        }
        return res.json(createPortfolio)
    });
};


exports.updatePortfolio = (req, res) => {
    const portfolioId = req.params.id;
    const portfolioData = req.body;

    Portfolio.findById(portfolioId, (err, foundPortfolio) => {
        if (err) {
            return res.status(422).send(err)
        }

        foundPortfolio.set(portfolioData);
        foundPortfolio.save((err, savePortfolio) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json(savePortfolio)
        });
    })

};


exports.deletePortfolio = (req, res) => {
    const portfolioId = req.params.id;

    Portfolio.deleteOne({_id: portfolioId}, (err, deletedPortfolio) => {
        if (err) {
            return res.status(422).send(err)
        }
        // console.log(deletedPortfolio);
        return res.json({status: 'DELETED'})
    })

};
