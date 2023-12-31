"use client";
// import ReactDOM from 'react-dom'
// import "remixicon/fonts/remixicon.css";
// import { RiHeartFill } from "@remixicon/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function HeadNav() {
    //   const element = <FontAwesomeIcon icon={faEnvelope} />;

    //   ReactDOM.render(element, document.body);
    // Define the toggleNavbar function
    const toggleNavbar = (navbarId: string) => {
        // Implement your logic here
        console.log(`Toggling navbar: ${navbarId}`);
    };

    const openDropdown = (event: React.MouseEvent, dropdownId: string) => {
        // Your implementation for opening the dropdown
        console.log(`Dropdown with ID ${dropdownId} will be opened.`);
    };

    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        href="./index.html"
                    >
                        Notus Tailwind JS
                    </a>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => toggleNavbar("example-collapse-navbar")}
                    >
                        {/* <i className="ri-article-line"></i> */}
                    </button>
                </div>
                <div
                    className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
                    id="example-collapse-navbar"
                >
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                            <a
                                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index"
                            >
                                {/* <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i> */}
                                Docs
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                        <li className="inline-block relative">
                            <a
                                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="#pablo"
                                onClick={(event) => openDropdown(event, "demo-pages-dropdown")}
                            >
                                Demo Pages
                            </a>
                            <div
                                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 navbar-popper"
                                id="demo-pages-dropdown"
                            >
                                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                                    Admin Layout
                                </span>
                                <a
                                    href="./pages/admin/dashboard.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="./pages/admin/settings.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Settings
                                </a>
                                <a
                                    href="./pages/admin/tables.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Tables
                                </a>
                                <a
                                    href="./pages/admin/maps.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Maps
                                </a>
                                <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
                                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                                    Auth Layout
                                </span>
                                <a
                                    href="./pages/auth/login.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Login
                                </a>
                                <a
                                    href="./pages/auth/register.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Register
                                </a>
                                <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
                                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                                    No Layout
                                </span>
                                <a
                                    href="./pages/landing.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Landing
                                </a>
                                <a
                                    href="./pages/profile.html"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >
                                    Profile
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-js%2F"
                                target="_blank"
                            >
                                {/* <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg"></i> */}
                                <span className="lg:hidden inline-block ml-2">Share</span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-js%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20JavaScript%20UI%20Kit%20and%20Admin.%20Let%20Notus%20JS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                                target="_blank"
                            >
                                {/* <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg"></i> */}
                                <span className="lg:hidden inline-block ml-2">Tweet</span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://github.com/creativetimofficial/notus-js?ref=njs-index"
                                target="_blank"
                            >
                                {/* <i className="text-blueGray-400 fab fa-github text-lg leading-lg"></i> */}
                                <span className="lg:hidden inline-block ml-2">Star</span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <button
                                className="text-white bg-pink-500 active:bg-pink-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                                {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                                Download
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
