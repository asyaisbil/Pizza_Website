
import React from "react";
import { Link } from "react-router-dom";


export default function Header() {

    return (
        <header>
            <div style={{
                backgroundImage: 'url("/../../../images/iteration-1-images/home-banner.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                height: '800px',
                width: '100%'
            }}>
                <img src="/../../../images/iteration-1-images/logo.svg" />
                <h1>KOD ACIKTIRIR, PİZZA DOYURUR</h1>
                <Link style={{ color: "white", fontFamily: "Barlow" }} to="/order" className="button">
                    ACIKTIM
                </Link>
            </div>
        </header>
    )
}