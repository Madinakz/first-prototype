import React from 'react';

// Styled Material UI elements
import {
    StyledContainer,
    StyledHeading,
    StyledSubtitle
} from '../styles'


export default function Header() {
    return (
        <StyledContainer maxWidth="lg">
            <StyledHeading variant="h2">
                Онлайн калькулятор для расчета декретных выплат и пособий
            </StyledHeading>
            <StyledSubtitle variant="body2">
                Это одностраничный сервис, который поможет Вам выполнить все необходимые расчеты
                по декретным выплатам и социальным пособиям, предоставляемым женщинам
                в связи с рождением ребенка (детей) в Республике Казахстан.
            </StyledSubtitle>
        </StyledContainer>

    )
}

