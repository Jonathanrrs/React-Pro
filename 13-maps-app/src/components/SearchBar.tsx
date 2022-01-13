import { ChangeEvent, useRef } from "react"

export const SearchBar = () => {

    /* para que sepa que es algo de un timeout */
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            /* buscar algo */
            console.log(event.target.value);
            
        }, 350);

    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar otro lugar..."
                onChange={onQueryChanged}
            />
        </div>
    )
}
