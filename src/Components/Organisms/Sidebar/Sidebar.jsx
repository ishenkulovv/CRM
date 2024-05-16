import React from "react";
import { SidebarStyled } from "./styled";
import Logo from "../../Atoms/Logo/Logo";
import SidebarList from "../../Molecules/SidebarList/SidebarList";
import { MAIN_LIST, OTHER_LIST, SALES_LIST } from "./const";

export default function Sidebar() {
    return (
        <SidebarStyled>
            <Logo />
            <SidebarList list={MAIN_LIST} />
            <SidebarList list={SALES_LIST} />
            <SidebarList list={OTHER_LIST} />
        </SidebarStyled>
    );
}
