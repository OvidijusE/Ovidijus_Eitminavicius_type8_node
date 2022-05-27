const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const { billRoutes } = require('./routes/billsRoutes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api', userRoutes);
app.use('/api', accountRoutes);
app.use('/api', billRoutes);

app.all('*', (req, res) => {
  res.status(400).json({ error: 'page not found' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
