import React from 'react';

// Styled Material UI elements
import {
    StyledContainer,
    StyledResults,
    StyledSubheader,
    StyledFooter,
    StyledTooltip
} from '../styles'

// Material UI Icons
import {
    ChildCareTwoTone,
    ChildFriendlyTwoTone,
    Face3TwoTone,
    FavoriteTwoTone
} from '@mui/icons-material';

const aboutMe = "Привет! Меня зовут Мадина, и я джуниор фронтэнд разработчик из Яблочного города. Я являюсь выпускницей школы nFactorial по гранту от проекта TechOrda. Моя жажда знаний и увлечение технологиями привели меня к смене карьеры от бухгалтеора в веб-разработке."

export default function Results() {
    return (
        <StyledContainer maxWidth="lg">
            <StyledResults>
                Результаты расчета:
            </StyledResults>
            <StyledSubheader>
                <Face3TwoTone />
                Социальная выплата по беременности и родам в связи с потерей дохода (единовременно до родов):
            </StyledSubheader>
            <StyledSubheader>
                <ChildCareTwoTone />
                Государственное пособие в связи с рождением ребенка (единовременно после родов):
            </StyledSubheader>
            <StyledSubheader>
                <ChildFriendlyTwoTone />
                Социальная выплата по уходу за ребенком по достижении им 1,5 лет (ежемесячно после родов):
            </StyledSubheader>
            <footer>
                <StyledTooltip title={aboutMe}>
                    <StyledFooter>
                        Coded with <FavoriteTwoTone /> by Madina
                    </StyledFooter>
                </StyledTooltip>
            </footer>
        </StyledContainer>

    )
}

