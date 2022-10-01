import React, { useState } from "react";
import Header from "./Header";
import About from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "./Contact";

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        switch (currentPage) {
            case 'About Me':
                return <About/>;
            case 'Projects':
                return <Projects/>
            case 'Contact':
                return <Contact/>
            default:
                return <About/>;
        }
    };

    const changePage = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} changePage={changePage}/>
            <div>
                {renderPage()}
            </div>
        </div>
    )
}