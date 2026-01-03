import CurrencyPicker from "@/components/CurrencyPicker";
import { Currency, BitcoinApiResponse } from "@/types";


const fetchBitcoin = async(): Promise<BitcoinApiResponse> => {
  const res = await fetch("https://sampleapis.assimilate.be/bitcoin/current", {
    cache: "no-cache",
  });

if (!res.ok) {
  throw new Error("Failed to fetch bitcoin price");
}

  return res.json();
}

export default async function Home(){
  const data = await fetchBitcoin();

  const list: Currency[] = [data.bpi.USD, data.bpi.EUR, data.bpi.GBP];

  return(
    <main>
      <h1>Bitcoin Price</h1>
      <CurrencyPicker list={list}/>
    </main>
  )
}