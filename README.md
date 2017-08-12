# 

## Instalação

```
npm install --save pjbank-api-client
```

# Quickstart

```javascript
'use strict';

const PJBankClient = require('pjbank-api-client');

const endpoint = 'bancos';

PJBankClient.get(endpoint)
    .then((bancos) => {
        console.info(bancos);
    })
    .catch((err) => {
        console.error(err);
    })

```


# Customizando o request 

```javascript
'use strict';

const PJBankClient = require('pjbank-api-client');

const body = {
    "vencimento": "12/30/2019",
    "valor": 50.75,
    "juros": 0,
    "multa": 0,
    "desconto": "",
    "nome_cliente": "Matheus Fidelis",
    "cpf_cliente": "62936576000112",
    "endereco_cliente": "Rua Joaquim Vilac",
    "numero_cliente": "501",
    "complemento_cliente": "",
    "bairro_cliente": "Vila Teixeira",
    "cidade_cliente": "Campinas",
    "estado_cliente": "SP",
    "cep_cliente": "13301510",
    "logo_url": "http://wallpapercave.com/wp/xK64fR4.jpg",
    "texto": "Exemplo de emissão de boleto",
    "grupo": "Boletos",
    "pedido_numero": "9977"
  };


const headers = {
    'content-type': 'application/json',
    'X-CHAVE' : 'ef947cf5867488f744b82744dd3a8fc4852e529f'
};

const endpoint = "recebimento/d3418668b85cea70aa28965eafaf927cd34d004c/transacoes";

PJBankClient.post(endpoint, body, null, headers)
.then((boleto) => {

    console.log(boleto);

}).catch((err) => {

    console.log(err);

});

```