import React from "react";
import {
    SidebarBack,
    SidebarBlock,
    SidebarFooter,
    SidebarHead,
    SidebarStyled,
    SidebarTitle,
} from "./styled";
import Logo from "../../Atoms/Logo/Logo";
import SidebarList from "../../Molecules/SidebarList/SidebarList";
import { MAIN_LIST, OTHER_LIST, SALES_LIST } from "./const";
import SideBarBackBTN from "../../../assets/icons/SideBarBackBTN";

export default function Sidebar() {
    return (
        <SidebarStyled>
            <SidebarHead>
                <Logo />
                <SidebarBack>
                    <SideBarBackBTN />
                </SidebarBack>
                <SidebarBlock>
                    <SidebarTitle>Main</SidebarTitle>
                    <SidebarList list={MAIN_LIST} />
                </SidebarBlock>
                <SidebarBlock>
                    <SidebarTitle>Sales</SidebarTitle>
                    <SidebarList list={SALES_LIST} />
                </SidebarBlock>
            </SidebarHead>
            <SidebarFooter>
                <SidebarList list={OTHER_LIST} />
            </SidebarFooter>
        </SidebarStyled>
    );
}
