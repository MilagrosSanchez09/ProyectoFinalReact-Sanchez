import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({onAdd, stock}) => {   
    //const stock = 10;

//Declaramos como valor 1 por default al cargar la página.
    const [count, setCount] = useState(1)

//State para controlar la cantidad de productos que agregamos teniendo en cuenta el stock.
    const [bookStock, setBookStock] = useState(stock);

    const [vendido, setVendido] = useState(false);

// Funciones para incrementar y decrementar respectivamente:

    const increase = () => {
        if (count < bookStock){
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }

// Funcion añadir al carrito

    const agregarAlCarrito = (quantity) => {
        if (count <= bookStock) {
            setCount(1);
            setBookStock(bookStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }

//Actualizamos la cantidad disponible de stock.
    useEffect(() => {
        setBookStock (stock);
    }, [stock])

    return (
        <div>
            <div>
                <button type="button" onClick={decrease}>-</button>
                <button type="button"> Cantidad : {count} </button>
                <button type="button" onClick={increase}>+</button>
            </div>
            <div>
                <div>
                    {vendido ? <button className="buy"><Link to={"/cart"} className="buy">Terminar mi compra</Link></button> :
                    <button type="button" className="addToCart" onClick={() => { agregarAlCarrito(count)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;