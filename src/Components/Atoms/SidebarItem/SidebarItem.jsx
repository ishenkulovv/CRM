import React from "react";
import { ListStyled } from "./styled";

export default function SidebarItem({ item }) {
    const { label, icon: Icon } = item;
    return (
        <ListStyled to={to}>
            <span>{Icon && <Icon />}</span>
            <span>{label}</span>
        </ListStyled>
    );
}
