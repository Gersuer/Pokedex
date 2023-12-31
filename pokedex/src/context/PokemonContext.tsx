/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";

interface PokeContextProps {
    list: ListProps[]
    loading: boolean
}
interface ChildrenProps {
    children: ReactNode
}
interface ListProps {
    name: string
    url: string
}

export const PokeContext = createContext({} as PokeContextProps);

function PokemonProvider({ children }: ChildrenProps) {
    const [list, setList] = useState<ListProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
                .then((result) => {
                    if (result) {
                        const copia = [...list]
                        result.data.results.map((item: ListProps) => {
                            copia.push(
                                {
                                    name: item.name,
                                    url: item.url
                                }
                            )
                        });
                        setList(copia);
                    }
                })
                .catch(err => console.log(err));
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <PokeContext.Provider
            value={{
                list,
                loading
            }}
        >
            {children}
        </PokeContext.Provider>
    )
}
export default PokemonProvider