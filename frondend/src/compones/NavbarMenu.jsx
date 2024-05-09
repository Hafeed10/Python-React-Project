import React from 'react';
import './navbar.css'

const NavbarMenu = () => {
    const nabar = [
        {
            id:1,
            title:'Prodects',
            link: '/'
        },
        {
            id:2,
            title:'AddProdects',
            link:'AddProduct'
        }
    ]
    return (
            <div className='navbar'>
                <h1>PRODUCT</h1>
                <div className="section-navbr">
                    <ul>
                        {
                            nabar.map(item => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
              
            </div>
    );
}


export default NavbarMenu;
