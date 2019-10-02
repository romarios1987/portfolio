const routes = require('next-routes');

module.exports = routes()
    .add('projectNew', '/portfolio/new')
    .add('projectDetail', '/portfolio/:slug')
    .add('projectEdit', '/portfolio/:id/edit')
    .add('portfolio', '/portfolio/:id');