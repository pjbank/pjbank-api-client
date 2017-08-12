"use strict";

const Api = "https://api.pjbank.com.br/";
const rq = require('request-promise');

/**
 * PJBank API constructor
 * @param {*} credencial 
 * @param {*} chave 
 */
function PJBankAPI(credencial, chave) {

  this._credencial = credencial;
  this._chave = chave;

  this.Client = {

    //GET request to PJBank
    get: (path, querystring = {}, headers = {}) => {

        return rq({
            uri: Api + path,
            method: "GET", 
            headers: headers,
            qs: querystring
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

}



module.exports = PJBankAPI;
