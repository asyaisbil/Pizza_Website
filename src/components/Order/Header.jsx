
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img
                src="/../../images/iteration-1-images/logo.svg"
            />
            <div className="order-buttons">
                <NavLink style={{ color: "white", fontFamily: "Barlow" }} activeStyle={{ fontWeight: "700" }} to="/" exact >Anasayfa</NavLink>
                <p>-</p>
                <NavLink style={{ color: "white", fontFamily: "Barlow" }} activeStyle={{ fontWeight: "700" }} to="/" exact >Seçenekler</NavLink>
                <p>-</p>
                <NavLink style={{ color: "white", fontFamily: "Barlow" }} activeStyle={{ fontWeight: "700" }} to="/order">Sipariş Oluştur</NavLink>
            </div>
        </header>
    )
}