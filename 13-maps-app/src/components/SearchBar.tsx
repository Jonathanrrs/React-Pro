import { ChangeEvent, useContext, useRef } from "react"
import { SearchResults } from ".";
import { PlacesContext } from '../context/places/PlacesContext';

export const SearchBar = () => {

    const {searchPlacesByTerm} = useContext(PlacesContext)

    /* para que sepa que es algo de un timeout */
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            /* buscar algo */
            searchPlacesByTerm(event.target.value);
            
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
            <SearchResults />
        </div>
    )
}
