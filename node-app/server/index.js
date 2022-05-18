const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { Database } = require('../database');
const { messagesApi } = require('../routes/messages');

class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.db = new Database();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        messagesApi(this.app);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

module.exports = {
    Server,
};