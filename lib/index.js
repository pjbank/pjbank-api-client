"use strict";

const Api = "https://api.pjbank.com.br/";
const rq = require('request-promise');


const PJBankAPI = {

    //GET request to PJBank
    get: (path, querystring = {}, headers = {}) => {

        return rq.get({
            uri: Api + path,
            headers: headers,
            qs: querystring,
            json: true
        });

    },

    //POST reuqest to PJBank
    post: (path, body = {}, querystring = {}, headers = {}) => {

        return rq.post({
            uri: Api + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    put: (path, body, querystring, headers, callback) => {

        return rq.put({
            uri: Api + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },


    delete: (path, body, querystring, headers, callback) => {

        return rq.delete({
            uri: Api + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    }

};

module.exports = PJBankAPI;