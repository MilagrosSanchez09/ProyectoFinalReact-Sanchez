import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {
    const { carrito, totalCart, removeItem, dropCart, sumaTotal } = useContext(CartContext);

    //Si no tenemos productos en el carrito:
    if (totalCart() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>¡Ups!</strong> Aún no has guardado productos en el carrito.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" colSpan={5} className="text-end"><Link onClick={dropCart} className="btn btn-warning" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" className="text-center">Libro</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                                    {carrito.map(item => (
                                        <tr key={item.id}>
                                            <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                            <td className="align-middle">{item.nombre}</td>
                                            <td className="align-middle text-center">{item.quantity}</td>
                                            <td className="align-middle text-center">${item.quantity * item.precio}</td>
                                            <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}}><img src={"/img/trash-fill.svg"} alt="Eliminar libro del carrito" width={32} /></Link></td>
                                        </tr>
                                    )
                                )
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                <td>${sumaTotal()}</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;