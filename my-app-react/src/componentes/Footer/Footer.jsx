import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="mx-1"><img src={"/facebook.svg"} alt={"Facebook"} width={24} /></a>
                    <a href="#" className="mx-1"><img src={"/instagram.svg"} alt={"Instagram"} width={24} /></a>
                    <a href="#" className="mx-1"><img src={"/whatsapp.svg"} alt={"WhatsApp"} width={24} /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Defensa del consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="img/green books.png" alt="Green Books" width="200" /> © Green Books 2023.</p>
                </div>
            </div>
        </div>
    )
}