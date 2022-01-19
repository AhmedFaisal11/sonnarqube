const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("common"));

app.get('/' , (req , res ) => {
    res.status(200).json({
        status: 'OK',
        messag: "This is Root path"
    });
});

app.listen(port , () => {
    console.log(`Server is runing on ${port}`);
    
});

module.exports = app;