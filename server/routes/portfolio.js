const express = require('express');
const router = express.Router();
const portfolioCtrl = require('../controllers/portfolio');

const authService = require('../services/auth');

router.post('/', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.saveProject);
router.get('/', portfolioCtrl.getPortfolio);
router.get('/:id', portfolioCtrl.getProjectById);
router.get('/s/:slug', portfolioCtrl.getProjectBySlug);
router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.updateProject);
router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.deleteProject);


module.exports = router;