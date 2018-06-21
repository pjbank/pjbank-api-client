const PJBankAPI = require('../lib/index');
const data = require('./data')
const test = require('unit.js')

describe('Testing PJBank ApiClient', () => {

    const Production = "https://api.pjbank.com.br/";
    const Sandbox = "https://sandbox.pjbank.com.br/";

    it("With process.env['PJBANK_DEVELOPER_MODE'] equal false then basepath should return Production", (done) => {
        process.env['PJBANK_DEVELOPER_MODE'] = false;
        test.assert(PJBankAPI.basepath() === Production);
        done();
    });

    it("With process.env['PJBANK_DEVELOPER_MODE'] equal true then basepath should return Sandbox", (done) => {
        process.env['PJBANK_DEVELOPER_MODE'] = true;
        test.assert(PJBankAPI.basepath() === Sandbox);
        done();
    });

    it("With process.env['PJBANK_DEVELOPER_MODE'] equal false then the URI must have '//api.' ", (done) => {
        process.env['PJBANK_DEVELOPER_MODE'] = false;

        const endpoint = `recebimentos/${data.credential()}/transacoes`;
        const body = data.payload_1();
        const header = data.headers();
        PJBankAPI.post(endpoint, body, null, header).then((res) => {
            done();
        }).catch((err) => {
            test.assert(err.options.uri.indexOf('//api.') !== -1);
            done();
        });

    });

    it("With process.env['PJBANK_DEVELOPER_MODE'] equal true then the URI must have '//sandbox.' ", (done) => {
        process.env['PJBANK_DEVELOPER_MODE'] = true;

        const endpoint = `recebimentos/${data.credential()}/transacoes`;
        const body = data.payload_1();
        const header = data.headers();
        PJBankAPI.post(endpoint, body, null, header).then((res) => {
            done();
        }).catch((err) => {
            test.assert(err.options.uri.indexOf('//sandbox.') !== -1);
            done();
        });

    });
});
