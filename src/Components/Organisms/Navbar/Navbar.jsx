import React from "react";
import { NavbarLeft, NavbarRight, NavbarStyled, NavbarTitle } from "./styled";
import ProfilePreview from "../../Molecules/ProfilePreview/ProfilePreview";
import BellHeaderIcon from "../../../assets/icons/BellHeaderIcon";
import MailHeaderIcon from "../../../assets/icons/MailHeaderIcon";

export default function Navbar({ title }) {
    return (
        <NavbarStyled>
            <NavbarLeft>
                <NavbarTitle>{title}</NavbarTitle>
            </NavbarLeft>
            <NavbarRight>
                <BellHeaderIcon />
                <MailHeaderIcon />
                <ProfilePreview />
            </NavbarRight>
        </NavbarStyled>
    );
}
