const express = require('express');
const articleRoutes = require('./routes/articleRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')


const app = express();
app.use(cors({
  origin: "http://localhost:4200",
  credentials: true 
}))
app.use(express.json());
app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
