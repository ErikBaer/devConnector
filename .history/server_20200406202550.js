const express = require('express');

const app = express();

const Port = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startet on Port ${PORT}`));