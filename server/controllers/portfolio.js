const slugify = require('slugify');
const Portfolio = require('../models/portfolio');


const titleToSlug = (title) => {
    return  slugify(title, {
        replacement: '-',    // replace spaces with replacement
        remove: null,        // regex to remove characters
        lower: true          // result in lower case
    });
};


exports.getPortfolio = (req, res) => {
    Portfolio.find({}, (err, allPortfolio) => {
        if (err) {
            return res.status(422).send(err)
        }
        return res.json(allPortfolio)
    }).sort({date: -1})
};


exports.getProjectById = (req, res) => {
    const portfolioId = req.params.id;

    Portfolio.findById(portfolioId)
        .select('-__v')
        .exec((err, foundPortfolio)=>{
            if (err) {
                return res.status(422).send(err)
            }
            return res.json(foundPortfolio)
    });

};


exports.getProjectBySlug = (req,res) => {
    const slug = req.params.slug;

    Portfolio.findOne({slug}, function(err, foundProject) {
        if (err) {
            return res.status(422).send(err);
        }

        return res.json(foundProject);
    });
};


exports.saveProject = (req, res) => {
    const portfolioData = req.body;

    portfolioData.slug = titleToSlug(portfolioData.title);

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


exports.updateProject = (req, res) => {
    const portfolioId = req.params.id;
    const portfolioData = req.body;

    portfolioData.slug = titleToSlug(portfolioData.title);

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


exports.deleteProject = (req, res) => {
    const portfolioId = req.params.id;

    Portfolio.deleteOne({_id: portfolioId}, (err, deletedPortfolio) => {
        if (err) {
            return res.status(422).send(err)
        }
        // console.log(deletedPortfolio);
        return res.json({status: 'DELETED'})
    })

};
