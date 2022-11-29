import React from 'react';
import { Outlet } from 'react-router-dom';
import { FcMenu } from "react-icons/fc";

import NavBar from '../Page/Navecation';

const DeshBord = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer-2" className="btn btn-ingo drawer-button lg:hidden"><FcMenu/></label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshBord;