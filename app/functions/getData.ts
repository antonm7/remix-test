import axios from 'axios';

export async function getCrypto() {
    try {
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
        return data.data
    } catch (e:any) {
        console.log('error:',e)
    }
}