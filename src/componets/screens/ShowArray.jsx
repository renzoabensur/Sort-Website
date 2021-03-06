import React from 'react'
import {
    MainContainer,
    Container,
    BarChartContainer,
    BlackLine,
    MakeBar
} from "./Styles";

export default function showArray(props) {
    return (
        <Container>
            <MainContainer>
            {props.array.map((distance,index) => {
                return (
                    <BarChartContainer key={index}>
                        <MakeBar height={distance} colors={["#ffd847", "#e0a106"]} />
                    </BarChartContainer>
                );
            })}
            </MainContainer>
            <BlackLine />
        </Container>
    )
}
