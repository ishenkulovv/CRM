import React from "react";
import Sidebar from "../../Organisms/Sidebar/Sidebar";
import Navbar from "../../Organisms/Navbar/Navbar";

export default function MainTemplate({ children, title }) {
    return (
        <>
            <Sidebar />
            <MainTemplate>
                <Navbar />
                {children}
            </MainTemplate>
        </>
    );
}
