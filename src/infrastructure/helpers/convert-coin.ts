
export class ConvertCoin {

    static convertCoinBRL(coin: number) {
        return coin.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    static convertCoinUSD(coin: number) {
        return coin.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

}


