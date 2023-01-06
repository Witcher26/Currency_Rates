const RATES = {
    usd: 0.013,
    eur: 0.014,
}

function convert({rub, currency}) {
    if(!RATES[currency]){
        return null;
    }

    return rub * RATES[currency];
} 