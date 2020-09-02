import React from 'react'
import Logo from '../style/imgs/syte_club_logo.png'

export default function Header() {

    return (
        <section className="header flex align-center justify-center">
            <img className="logo" src={Logo} alt=""/>
            <h1 className="company-name">team-Syte</h1>
        </section>
    )
}