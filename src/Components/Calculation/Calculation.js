import React from 'react';
import Results from '../Results/Results';

// Styled Material UI elements
import {
  StyledContainer,
  StyledSubheader,
  StyledDatePicker,
  StyledFormHelperText,
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledTextField,
  StyledFormControlLabel,
  StyledTooltip,
  StyledTextFieldForDetailedCalc
} from '../styles'

// Material UI elements
import {
  Switch
} from '@mui/material';

// Material UI Icons
import {
  EventTwoTone,
  AddReactionTwoTone,
  WorkTwoTone,
  CalendarMonthTwoTone,
  PaymentsTwoTone,
  LocalAtmTwoTone
} from '@mui/icons-material';

// Material UI Calendar libraries
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Calculation() {

  // setSelectedDate -- HANDLER
  const [selectedDate, setSelectedDate] = React.useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // setChild -- HANDLER
  const [child, setChild] = React.useState('1');
  const handleChangeChild = (event) => {
    setChild(event.target.value);
  };

  // setEmployment -- HANDLER
  const [employment, setEmployment] = React.useState('1');
  const handleChangeEmployment = (event) => {
    setEmployment(event.target.value);
  }

  // setCondition -- HANDLER
  const [condition, setCondition] = React.useState('126');
  const handleChangeCondition = (event) => {
    setCondition(event.target.value);
  };

  // setl12mIncome -- HANDLER
  const [l12mIncome, setl12mIncome] = React.useState('');
  const handleChangel12mIncome = (event) => {
    setl12mIncome(event.target.value);
  };

  // setl24mIncome -- HANDLER
  const [l24mIncome, setl24mIncome] = React.useState('');
  const handleChangel24mIncome = (event) => {
    setl24mIncome(event.target.value);
  };

  // setCheckedDetailedCalc - HANDLER
  const [checked, setCheckedDetailedCalc] = React.useState(false);
  const handleChangeDetailedCalc = (event) => {
    setCheckedDetailedCalc(event.target.checked);
  };

  // array with the last 24 months for detailed calculation
  const months = Array.from({ length: 24 }, (_, index) => {
    const currentDate = selectedDate ? new Date(selectedDate) : new Date();
    currentDate.setDate(1); // Set the date to 1st day of the month
    currentDate.setMonth(currentDate.getMonth() - index - 1);

    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    return `${month} ${year}`;
  }).slice(-24);

  // sum of 12 & 24 months for detailed calculation
  const [last24Sum, setLast24Sum] = React.useState(0);
  const [last12Sum, setLast12Sum] = React.useState(0);

  // Zero payment (before child birth) if not employed
  const EmploymentLimit = employment > 2
    ? 0
    : 1;
  const mzp = 490000

  // maximum payment limited by mzp
  const last12SumP = last12Sum / 12
  const last24SumP = last12Sum / 24

  const Income12Limit = checked
    ? last12SumP > mzp
      ? mzp
      : last12SumP
    : l12mIncome > mzp
      ? mzp
      : l12mIncome;

  const Income24Limit = checked
    ? last24SumP > mzp
      ? mzp
      : last24SumP
    : l24mIncome > mzp
      ? mzp
      : l24mIncome;

  // Payment before child birth
  const PaymentBeforeChildBirth = condition / 30 * Income12Limit * 0.9 * EmploymentLimit

  // Child birth payment calculation
  const mrp = 3450 // in 2023
  const ChildBirthPayment = child > 3
    ? mrp * 68
    : mrp * 38;

  // Payment after child birth
  let PaymentAfterChildBirth;

  PaymentAfterChildBirth =
    employment === 3 && child === 1
      ? 5.76 * mrp
      : employment === 3 && child === 2
        ? 6.81 * mrp
        : employment === 3 && child === 3
          ? 7.85 * mrp
          : employment === 3 && child === 4
            ? 8.90 * mrp
            : employment === 1 || (employment === 2 && child === 1)
              ? Math.max(0.4 * Income24Limit * 0.9, 5.76 * mrp)
              : employment === 1 || (employment === 2 && child === 2)
                ? Math.max(0.4 * Income24Limit * 0.9, 6.81 * mrp)
                : employment === 1 || (employment === 2 && child === 3)
                  ? Math.max(0.4 * Income24Limit * 0.9, 7.85 * mrp)
                  : Math.max(0.4 * Income24Limit * 0.9, 8.90 * mrp);

  // Toolkits text
  const aboutIncome = "Доход, с которого исчисляется социальные отчисления (СО). Если Вы наемный работник, то это сумма Вашего начисленного оклада минус 10% обязательных пенсионных отчислений (ОПВ)"


  return (

    <StyledContainer maxWidth="lg">
      <StyledSubheader>
        <EventTwoTone />
        Планируемая дата выхода в декретный отпуск:
      </StyledSubheader>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          label="ДД-ММ-ГГГГ"
          disablePast="true"
          format="DD-MM-YYYY"
          onChange={handleDateChange}
        />
      </LocalizationProvider>
      <StyledFormHelperText>
        Планируемая дата оформления болничного листа для выхода в отпуск по беременности и родам (декретного отпуска).
        Данное поле влияет на период, учитываемый при детализированном расчете среднемесячного дохода за последние 12 и 24 месяца.
      </StyledFormHelperText>

      <StyledSubheader>
        <AddReactionTwoTone />
        Ребенок:
      </StyledSubheader>
      <StyledFormControl fullWidth>
        <StyledInputLabel id="ChildSelectLabel">Ребенок</StyledInputLabel>
        <StyledSelect
          labelId="ChildSelectLabel"
          id="ChildSelect"
          value={child}
          label="Ребенок"
          onChange={handleChangeChild}
        >
          <StyledMenuItem value={1}>Первый ребенок</StyledMenuItem>
          <StyledMenuItem value={2}>Второй ребенок</StyledMenuItem>
          <StyledMenuItem value={3}>Третий ребенок</StyledMenuItem>
          <StyledMenuItem value={4}>Четвертый и более ребенок</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>
      <StyledFormHelperText>
        Данное поле влияет на государственное единовременное пособие в связи с рождением ребенка.
        Это пособие выплачивается всем родившим женщинам: как работающим, так и не работающим, из государственного бюджета.
        Размер пособия на рождение ребенка фиксированный и зависит от количества детей.
      </StyledFormHelperText>

      <StyledSubheader>
        <WorkTwoTone />
        Занятость:
      </StyledSubheader>
      <StyledFormControl fullWidth>
        <StyledInputLabel id="EmploymentSelectLabel">Занятость</StyledInputLabel>
        <StyledSelect
          labelId="EmploymentSelectLabel"
          id="EmploymentSelect"
          value={employment}
          label="Занятость"
          onChange={handleChangeEmployment}
        >
          <StyledMenuItem value={1}>Наемный работник</StyledMenuItem>
          <StyledMenuItem value={2}>Индивидуальный предприниматель (ИП)</StyledMenuItem>
          <StyledMenuItem value={3}>Безработная</StyledMenuItem>
        </StyledSelect>

      </StyledFormControl>
      <StyledFormHelperText>
        Текущая занятость женщины
      </StyledFormHelperText>

      <StyledSubheader>
        Условия родов и льготы для женщин:
      </StyledSubheader>
      <StyledFormControl fullWidth>
        <StyledInputLabel id="ConditionSelectLabel">Условия родов и льготы для женщин</StyledInputLabel>
        <StyledSelect
          labelId="ConditionSelectLabel"
          id="ConditionSelect"
          value={condition}
          label="Условия родов и льготы для женщин"
          onChange={handleChangeCondition}
        >
          <StyledMenuItem value={126}>для нормально протекающих родов</StyledMenuItem>
          <StyledMenuItem value={140}>в случае осложненных родов или рождения двух или более детей</StyledMenuItem>
          <StyledMenuItem value={170}>для женщин, проживающих на территориях, подвергшихся воздействию ядерных испытаний, при нормальных родах</StyledMenuItem>
          <StyledMenuItem value={184}>для женщин, проживающих на территориях, подвергшихся воздействию ядерных испытаний, в случае осложненных родов или при рождении двух и более детей</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>
      <StyledFormHelperText>
        Данное поле влияет на количество дней декретного отпуска.
      </StyledFormHelperText>
      <StyledSubheader>
        {condition === 140 ? (
          <p><CalendarMonthTwoTone />С тридцатой недели беременности на 140 календарных дней (из них 70 — до родов, и 70 — после).</p>
        ) : condition === 170 ? (
          <p><CalendarMonthTwoTone />С двадцать седьмой недели беременности на 170 календарных дней (из них 91 — до родов, и 79 — после).</p>
        ) : condition === 184 ? (
          <p><CalendarMonthTwoTone />С двадцать седьмой недели беременности на 184 календарных дней (из них 91 — до родов, и 93 — после).</p>
        ) : (
          <p><CalendarMonthTwoTone />С тридцатой недели беременности на 126 календарных дней (из них 70 — до родов, и 56 — после).</p>
        )}
      </StyledSubheader>

      <StyledFormControlLabel
        control={<Switch
          checked={checked}
          onChange={handleChangeDetailedCalc}
          color="primary"
        />}
        label="Детализированный расчет"
      />
      {checked ? (
        <div>
          <StyledTooltip title={aboutIncome}>
            <StyledSubheader>
              <PaymentsTwoTone />
              Среднемесячный доход за последние 24 месяца:
            </StyledSubheader>
          </StyledTooltip>
          {months.map((month, index) => (
            <grid item key={month}>
              <StyledTextFieldForDetailedCalc
                label={month}
                variant="outlined"
                type="number"
                //helperText="Some important text"
                onBlur={(event) => {
                  const value = Number(event.target.value);
                  const newLast24Sum = last24Sum + value;
                  setLast24Sum(newLast24Sum);

                  if (index < months.length - 12) {
                    const newLast12Sum = last12Sum + value;
                    setLast12Sum(newLast12Sum);
                  }
                }}
              />
            </grid>
          ))}
          <StyledSubheader>
            <LocalAtmTwoTone />Среднемесячный доход за последние 12 месяцев: {parseInt(last12SumP).toLocaleString('en')} тенге
          </StyledSubheader>
          <StyledSubheader>
            <LocalAtmTwoTone />Среднемесячный доход за последние 24 месяцев: {parseInt(last24SumP).toLocaleString('en')} тенге
          </StyledSubheader>
        </div>
      ) : (
        <div>
          <StyledTooltip title={aboutIncome}>
            <StyledSubheader>
              <PaymentsTwoTone />
              Среднемесячный доход за последние 12 месяцев:
            </StyledSubheader>
          </StyledTooltip>
          <StyledTextField
            id="standard-basic1"
            label="Среднемесячный доход за последние 12 месяцев"
            variant="outlined"
            type="number"
            onChange={handleChangel12mIncome}
            value={l12mIncome}
          />
          <StyledFormHelperText>
            Размер среднемесячного дохода за последние 12 месяцев влияет на Единовременную социальную выплату
            на случаи потери дохода в связи с беременностью и родами, усыновлением (удочерением) новорожденного ребенка (детей).
          </StyledFormHelperText>
          <StyledTooltip title={aboutIncome}>
            <StyledSubheader>
              <PaymentsTwoTone />
              Среднемесячный доход за последние 24 месяца:
            </StyledSubheader>
          </StyledTooltip>
          <StyledTextField
            id="standard-basic2"
            label="Среднемесячный доход за последние 24 месяца"
            variant="outlined"
            type="number"
            onChange={handleChangel24mIncome}
            value={l24mIncome}
          />
          <StyledFormHelperText>
            Размер среднемесячного дохода за последние 24 месяца влияет на Ежемесячную социальную выплату
            на случай потери дохода в связи с уходом за ребенком по достижении им возраста 1,5 лет.
          </StyledFormHelperText>
        </div>
      )}
      <Results ChildBirthPayment={ChildBirthPayment} PaymentBeforeChildBirth={PaymentBeforeChildBirth} PaymentAfterChildBirth={PaymentAfterChildBirth} />
    </StyledContainer>

  )
}
