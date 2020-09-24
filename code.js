let stocks = new Stocks('BNPCNCKFH91QEZV8');


async function request() {
    let result = await stocks.timeSeries({
        symbol: 'TSLA',
        interval: 'monthly',
        start: new Date('2020-01-01'),
        end: new Date('2020-9-01')
    });
    document.body.innerHTML = JSON.stringify(result);
    
}

request();
