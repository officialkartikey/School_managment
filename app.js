const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server is runing on port');
});

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});