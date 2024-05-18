import React from "react";
import {
    TableBody,
    TableContainer,
    TableHead,
    TableOrder,
    TableOrderId,
    TableStatus,
    TableTd,
    TableTh,
    TableTr,
} from "./styled";
import CheckBox from "../../Atoms/CheckBox/CheckBox";

export default function Table() {
    return (
        <div>
            <TableContainer>
                <TableHead>
                    <TableTr>
                        <TableTh>Orders</TableTh>
                        <TableTh>Date</TableTh>
                        <TableTh>Customer</TableTh>
                        <TableTh>Payment</TableTh>
                        <TableTh>Status</TableTh>
                        <TableTh>Price</TableTh>
                    </TableTr>
                </TableHead>
                <TableBody>
                    <TableTr>
                        <TableTd>
                            <CheckBox />
                        </TableTd>
                        <TableTd>
                            <TableOrder>Vest Hoddle</TableOrder>
                            <TableOrderId>#ID238976</TableOrderId>
                        </TableTd>
                        <TableTd>Apr 24, 2022</TableTd>
                        <TableTd>Chieko Chute</TableTd>
                        <TableTd>
                            <TableStatus bg=" #E7F7EF;" color=" #0CAF60;">
                                Paid
                            </TableStatus>
                        </TableTd>
                        <TableTd>
                            <TableStatus bg=" #FFF0E6;" color=" #FE964A;">
                                Cancelled
                            </TableStatus>
                        </TableTd>
                        <TableTd>$450.00</TableTd>
                    </TableTr>
                </TableBody>
            </TableContainer>
        </div>
    );
}
