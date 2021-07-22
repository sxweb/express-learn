const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});