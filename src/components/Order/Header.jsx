
import React from "react";

export default function Header() {
    return (
        <header>
            <img
                src="/../../images/iteration-1-images/logo.svg"
            />
            <div className="order-buttons">
                <button>Anasayfa</button>
                <p>-</p>
                <button>Seçenekler</button>
                <p>-</p>
                <button>Sipariş Oluştur</button>
            </div>
        </header>
    )
}