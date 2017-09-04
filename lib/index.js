"use strict";

const Api = "https://api.pjbank.com.br/";
const Sandbox = "https://sandbox.pjbank.com.br/";
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

    //POST request to PJBank
    post: (path, body = {}, querystring = {}, headers = {}) => {

        return rq.post({
            uri: Api + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    //PUT request to PJBank
    put: (path, body, querystring, headers, callback) => {

        return rq.put({
            uri: Api + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    //DELETE request to PJBank
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
