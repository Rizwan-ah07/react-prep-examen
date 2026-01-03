export type CurrencyCode = "USD" | "EUR" | "GBP";

export interface Currency {
    code: CurrencyCode;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export type BitcoinApiResponse = {
  bpi: {
    USD: Currency;
    EUR: Currency;
    GBP: Currency;
  };
};

