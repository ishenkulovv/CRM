import React from "react";
import {
    CheckBoxArrow,
    CheckBoxContainer,
    CheckBoxInput,
    CheckBoxLabel,
} from "./styled";
import CheckABoxIcon from "../../../assets/icons/CheckBoxIcon";

export default function CheckBox() {
    return (
        <div>
            <CheckBoxContainer>
                <CheckBoxInput id="checkbox-1" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox-1">
                    <CheckBoxRadio>
                        <CheckABoxIcon />
                    </CheckBoxRadio>
                </CheckBoxLabel>
            </CheckBoxContainer>
        </div>
    );
}
