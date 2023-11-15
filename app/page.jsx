"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page() {
    return <div>
        <CountButton name="Pablo" mult={1} size={2}/>
        <CountButton name="Pia" mult={2} size={0.5}/>
        <hr/>
        <a href="https://github.com/jtann5/NextJS">my github repo</a>
        <hr/>
        <SearchBar/>
    </div>
}