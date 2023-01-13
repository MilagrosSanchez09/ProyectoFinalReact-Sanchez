import React from "react";
import { useParams, Link } from "react-router-dom";

const Agradecimiento = () => {
    const {id} = useParams()

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">
                        <h1>¡Gracias por tu compra, y por confiar en nosotros!</h1>
                        <p>Número de orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-danger">Volver a Inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Agradecimiento;