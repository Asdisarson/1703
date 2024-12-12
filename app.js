const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const logger = require('./config/logger');

// Reference to existing routers
const byliEinstaklingarRouter = require('./routes/byliEinstaklingar');
const hreppirDetailsRouter = require('./routes/hreppirDetails');
const logbyliBufeRouter = require('./routes/logbyliBufe');
const logbyliDetailsRouter = require('./routes/logbyliDetails');
const logbyliRouter = require('./routes/logbyliDetails');
const syslurHrepparRouter = require('./routes/syslurHreppar');

const app = express();

// Use morgan with winston
app.use(morgan('combined', { 
    stream: { 
        write: message => logger.info(message.trim()) 
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error('Unhandled error:', { 
        error: err.message,
        stack: err.stack,
        url: req.url,
        method: req.method
    });
    res.status(500).json({ error: 'Internal server error' });
});

app.use('/api/byli-einstaklingar', byliEinstaklingarRouter);
app.use('/api/hreppir-details', hreppirDetailsRouter);
app.use('/api/logbyli-bufe', logbyliBufeRouter);
app.use('/api/logbyli-details', logbyliDetailsRouter);
app.use('/api/logbyli-list', logbyliRouter);
app.use('/api/syslur-hreppar', syslurHrepparRouter);

module.exports = app;
