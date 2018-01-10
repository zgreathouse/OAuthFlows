const express = require('express');

const app = express();

require('./routes/authRoutes')(app);

const PORT = precess.env.PORT || 5000;
app.listen(PORT);
