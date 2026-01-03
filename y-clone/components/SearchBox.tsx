"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useState } from "react";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const q: string = searchParams.get("q") ?? "";
    const [searchField, setSearchField] = useState<string>(q);

    const onSubmit : FormEventHandler<HTMLFormElement> = (e) =>{ 
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (searchField !== "") {
            params.set("q", searchField)
        } else {
            params.delete("q");
        }

        replace(`?${params.toString()}`)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    className="border-2 border-black"
                    type="search"
                    value={searchField}
                    onChange={(e) => setSearchField(e.target.value)}
                />

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;