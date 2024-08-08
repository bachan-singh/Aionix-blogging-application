const db = require('../utils/db');

const Article = {
    
  create: (data, callback) => {
    const sql = 'INSERT INTO articles (title, content, authorId, categories) VALUES (?, ?, ?, ?)';
    db.query(sql, [data.title, data.content, data.authorId, data.categories], callback);
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM articles WHERE id = ?';
    db.query(sql, [id], callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE articles SET title = ?, content = ?, categories = ? WHERE id = ?';
    db.query(sql, [data.title, data.content,data.categories, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM articles WHERE id = ?';
    db.query(sql, [id], callback);
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM articles';
    db.query(sql, callback);
  },

  findByCategoryId: (category, callback) => {
    const sql = 'SELECT * FROM articles WHERE categories = ?';
    db.query(sql, [category], callback);
  },
};

module.exports = Article;
