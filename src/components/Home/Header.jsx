
import React from "react";
import { Button } from "reactstrap";

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
                <Button className="button">
                    ACIKTIM
                </Button>
            </div>
        </header>
    )
}