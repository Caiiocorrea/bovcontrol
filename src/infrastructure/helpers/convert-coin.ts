
export class ConvertCoin {

    static convertCoinBRL(coin: number) {
        console.log({ coin })
        return coin.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    static convertCoinUSD(coin: number) {
        console.log({ coin })
        return coin.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

}


