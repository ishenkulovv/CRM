import React from "react";
import { TabsContainer, TabStyled } from "./styled";

export default function Tabs({ list }) {
    return (
        <TabsContainer>
            {list.map((item) => {
                <TabStyled
                    key={item.id}
                    active={item.active ? "true" : "false"}
                >
                    {item.label}
                </TabStyled>;
            })}
        </TabsContainer>
    );
}
