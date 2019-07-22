import { Pipe, PipeTransform } from '@angular/core';

// space between currency and symbol - chained with currency pipe.
// currency:[value] | spaceBetweenCurrency
@Pipe({
    name: 'spaceBetweenCurrency'
})
export class SpaceBetweenCurrencyPipe implements PipeTransform {
    transform(currency) {
        if (currency) {
            const firstDigit = currency.match(/\d/);
            const symbol = currency.slice(0, firstDigit.index);
            const amount = currency.slice(firstDigit.index);
            return symbol + ' ' + amount;
        }
        return '';
    }
}
