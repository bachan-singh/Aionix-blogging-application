const Article = require('../models/Article');
const response = require('../utils/response');

const articleController = {
  createArticle: (req, res) => {
    Article.create(req.body, (err, result) => {
      if (err) {
        return response.error(res, err);
      }
      response.success(res, result, 'Article created successfully');
    });
  },

  getArticle: (req, res) => {
    Article.findById(req.params.id, (err, result) => {
      if (err) {
        return response.error(res, err);
      }
      response.success(res, result);
    });
  },

  updateArticle: (req, res) => {
    Article.update(req.params.id, req.body, (err, result) => {
      if (err) {
        return response.error(res, err);
      }
      response.success(res, result, 'Article updated successfully');
    });
  },

  deleteArticle: (req, res) => {
    Article.delete(req.params.id, (err, result) => {
      if (err) {
        return response.error(res, err);
      }
      response.success(res, result, 'Article deleted successfully');
    });
  },

  getAllArticles: (req, res) => {
    Article.findAll((err, result) => {
      if (err) {
        return response.error(res, err);
      }
      response.success(res, result);
    });
  },

  getArticlesByCategory: (req, res) => {
    const { category } = req.params;
    Article.findByCategoryId(category, (err, result) => {
      if (err) {
        return response.error(res, err);
      }
      response.success(res, result);
    });
  }
};

module.exports = articleController;
