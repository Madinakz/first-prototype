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

// Toolkits text
const aboutMe = "Привет! Меня зовут Мадина, и я junior front-end разработчик из Яблочного города. Я являюсь выпускницей школы nFactorial по гранту от проекта TechOrda. Моя жажда новых знаний привела меня к смене карьеры от бухгалтера в веб-разработке."



    const Results = ({ ChildBirthPayment, PaymentBeforeChildBirth, PaymentAfterChildBirth }) => {
        const PaymentAfterChildBirthFull = PaymentAfterChildBirth * 18
      
        return (

          <StyledContainer maxWidth="lg">
            <StyledResults>
              Результаты расчета:
            </StyledResults>
            <StyledSubheader>
              <Face3TwoTone />
              Социальная выплата по беременности и родам в связи с потерей дохода (единовременно до родов): {parseInt(PaymentBeforeChildBirth).toLocaleString('en')} тенге
            </StyledSubheader>
            <StyledSubheader>
              <ChildCareTwoTone />
              Государственное пособие в связи с рождением ребенка (единовременно после родов): {parseInt(ChildBirthPayment).toLocaleString('en')} тенге
            </StyledSubheader>
            <StyledSubheader>
              <ChildFriendlyTwoTone />
              Социальная выплата по уходу за ребенком по достижении им 1,5 лет: {parseInt(PaymentAfterChildBirthFull).toLocaleString('en')} тенге (или ежемесячно {parseInt(PaymentAfterChildBirth).toLocaleString('en')} тенге после родов)
            </StyledSubheader>
            <footer>
              <StyledTooltip title={aboutMe}>
                <StyledFooter>
                  Coded with <FavoriteTwoTone /> by Madina
                </StyledFooter>
              </StyledTooltip>
            </footer>
          </StyledContainer>
        );
      };
      
      export default Results;