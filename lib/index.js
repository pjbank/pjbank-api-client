"use strict";

const Production = "https://api.pjbank.com.br/";
const Sandbox = "https://sandbox.pjbank.com.br/";
const rq = require('request-promise');

function basepath(sandbox) {
    if (sandbox === true) {
        return Sandbox;
    } else {
        return Production;
    }
}

const PJBankAPI = {

    //GET request to PJBank
    get: (path, querystring = {}, headers = {}, sandbox = false) => {

        return rq.get({
            uri: basepath(sandbox) + path,
            headers: headers,
            qs: querystring,
            json: true
        });

    },

    //POST request to PJBank
    post: (path, body = {}, querystring = {}, headers = {}, sandbox = false) => {

        return rq.post({
            uri: basepath(sandbox) + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    //PUT request to PJBank
    put: (path, body, querystring, headers, sandbox = false) => {

        return rq.put({
            uri: basepath(sandbox) + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    },

    //DELETE request to PJBank
    delete: (path, body, querystring, headers, sandbox = false) => {

        return rq.delete({
            uri: basepath(sandbox) + path,
            headers: headers,
            qs: querystring,
            json: body
        });

    }

};

module.exports = PJBankAPI;
