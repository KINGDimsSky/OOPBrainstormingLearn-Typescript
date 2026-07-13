interface FormatCurrencyOptions {
    amount : number,
    currency?: string,
    locale ?: string
}

export function formatCurrency ({ amount, currency = "IDR", locale = "id-ID" } : FormatCurrencyOptions) : string {
    return new Intl.NumberFormat(locale, {
        style : 'currency',
        currency : currency
    }).format(amount)
}