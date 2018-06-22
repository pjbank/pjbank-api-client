"use strict";

const Production = "https://api.pjbank.com.br/";
const Sandbox = "https://sandbox.pjbank.com.br/";
const rq = require('request-promise');

const PJBankAPI = {

    // function that return URI to sandbox or production
    basepath: () => {
        if (process.env.PJBANK_DEVELOPER_MODE === 'true') {
            return Sandbox;
        } else {
            return Production;
        }
    },

    //GET request to PJBank
    get: (path, querystring = {}, headers = {}) => {

        return rq.get({
            uri: PJBankAPI.basepath() + path,
            headers: headers,
            qs: querystring,
            json: true
        });

    },

    //POST request to PJBank
    post: (path, body = {}, querystring = {}, headers = {}) => {

        return rq.post({
            uri: PJBankAPI.basepath() + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    //PUT request to PJBank
    put: (path, body = {}, querystring = {}, headers = {}) => {

        return rq.put({
            uri: PJBankAPI.basepath() + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    //DELETE request to PJBank
    delete: (path, body = {}, querystring = {}, headers = {}) => {

        return rq.delete({
            uri: PJBankAPI.basepath() + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    }

};

module.exports = PJBankAPI;
