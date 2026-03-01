import React from 'react';
import img from '../../assets/logo.png'
import dolar from '../../assets/dollar.png'

const Navbar = () => {
        return (
                <div className="navbar max-w-7xl mx-auto">
                        <div className="flex-1">
                                <img src={img} alt="logo" className="h-20 w-20" />
                        </div>
                        <div className="flex items-center gap-2">
                                <span>6000000000</span>
                                <span>coin</span>
                                <img src={dolar} alt="dollar" className="h-6 w-6" />
                        </div>
                </div>
        );
};

export default Navbar;