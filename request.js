const fetch = require('node-fetch');

var headers = {
    "Host": "loterias.caixa.gov.br",
    "Connection": "keep-alive",
    "Accept": ["application/json", "text/plain"],
    "Request-Id": "|gQ3bt.OiZid",
    "User-Agent": ["Mozilla/5.0 (Macintosh", "Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML", "like Gecko) Chrome/79.0.3945.130 Safari/537.36"],
    "Request-Context": ["appId=cid-v1:51424569-30f5-41dc-acc7-6ddd0767375a"],
    "Referer": ["http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/"],
    "Accept-Encoding": ["gzip", "deflate"],
    "Accept-Language": ["pt-BR,pt", "q=0.9", "en-US", "q=0.8", "en", "q=0.7"],
    "Cookie": ["security=true", "ai_user=olcix|2020-02-10T17:43:07.421Z", "ai_session=/VySj|1581356587424.43|1581356587424.43", "_pk_ref.4.968f=%5B%22%22%2C%22%22%2C1581356588%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D", "_pk_id.4.968f=b454e510ffe028c5.1581356588.1.1581356588.1581356588.", "_pk_ses.4.968f=*", "_ga=GA1.4.1094927038.1581356588", "_gid=GA1.4.213073038.1581356588"]
}

var server = 'http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/c=cacheLevelPage/=/?timestampAjax=1581357364029&concurso=2228';

fetch(server, { method: 'GET', headers: headers }, 5000)
    .then((res) => {
        return res.json()
    })
    .then((json) => {

        //if (json.ganhadores > 0) {
            console.log(json.resultado);
            const fs = require('fs');
            fs.appendFile('numeros_sorteados.txt', JSON.stringify(json), function (err) {
                if (err) throw err;
                console.log('Salvo!');
            });

        //}
    })
    .catch(function (error) {
        console.log('Não foi possível realizar o método GET: ' + error.message);
    });





