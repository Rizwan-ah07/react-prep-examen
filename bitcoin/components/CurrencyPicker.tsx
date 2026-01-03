"use client";

import {useEffect, useState} from "react";
import {Currency, BitcoinApiResponse} from "@/types";
import CurrencyCard from "@/components/CurrencyCard";

type CurrencyPickerProps = {
    list: Currency[];
}

export default function CurrencyPicker({list}: CurrencyPickerProps){
    const [currencies, setCurrencies] = useState<Currency[]>(list)
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://sampleapis.assimilate.be/bitcoin/current", {
                cache: "no-cache",
            })

            if (!res.ok){
                throw new Error("Failed to fetch bitcoin price")
            };

            const data: BitcoinApiResponse = await res.json();
            const currencyList: Currency[] = [data.bpi.USD, data.bpi.EUR, data.bpi.GBP];
            setCurrencies(currencyList);
        };

        load();

        const id = setInterval(load, 60_000); //1 minute
        return () => clearInterval(id);
    }, []);

    return(
        <div>
            {currencies.map((c => (
                <div key={c.code} onClick={() => setSelected(c.code)}
                style={{
                    backgroundColor: selected === c.code  ? "#d1fae5" : "#f3f4f6",
                    color: "#1a1818ff",
                    padding: 12,
                    cursor: "pointer",
                }}
                >
                    <CurrencyCard currency={c} />
                </div>
            )))}
        </div>
    )
}