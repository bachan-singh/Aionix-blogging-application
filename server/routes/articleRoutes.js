const express = require('express');
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, articleController.createArticle);
router.get('/:id', articleController.getArticle);
router.put('/:id', authMiddleware, articleController.updateArticle);
router.delete('/:id', authMiddleware, articleController.deleteArticle);
router.get('/', articleController.getAllArticles);
router.get('/category/:category', articleController.getArticlesByCategory);

module.exports = router;
