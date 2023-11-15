import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData() {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className="prodStyle" keys={index}>
                    <div className="prodImg"><img src={product.image} alt={product.title}/></div>
                    <p>{product.title}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
   
    function handleChange(event) {
        setSearchString(event.target.value)
    }
    return <div>
        <p>The Search Bar!</p>
        <input type="text" value={searchString} onChange={handleChange}/>
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filterProducts}</div>
    </div>
}