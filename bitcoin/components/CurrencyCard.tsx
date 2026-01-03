import { Currency } from "@/types";

type CurrencyCardProps ={
    currency: Currency;
}

export default function CurrencyCard({currency}: CurrencyCardProps) {
    return(
    <div style={{ border: "1px solid #333", padding: 16, width: 220 }}>
            <h2>
                {currency.code} ({currency.symbol})
            </h2>

            <p>{currency.rate_float.toLocaleString()}</p>
            <p>{currency.description}</p>
        </div>
    )
}