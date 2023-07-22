import React from 'react';

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
  StyledTooltip
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
  const [checked, setCheckedDetailedCalc] = React.useState(true);
  const handleChangeDetailedCalc = (event) => {
    setCheckedDetailedCalc(event.target.checked);
  };

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
        Вот тут нужно написать на что это влияет тро-ло-ло
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


      <StyledSubheader>
        <PaymentsTwoTone />
        Среднемесячный доход за последние 12 месяцев:
      </StyledSubheader>
      <StyledTextField
        id="standard-basic1"
        label="Среднемесячный доход за последние 12 месяцев"
        variant="outlined"
        type="number"
        onChange={handleChangel12mIncome}
        value={l12mIncome}
      />
      <StyledFormHelperText>
        Вот тут нужно написать на что это влияет тро-ло-ло
      </StyledFormHelperText>

      <StyledSubheader>
        <PaymentsTwoTone />
        Среднемесячный доход за последние 24 месяца:
      </StyledSubheader>
      <StyledTextField
        id="standard-basic2"
        label="Среднемесячный доход за последние 24 месяца"
        variant="outlined"
        type="number"
        onChange={handleChangel24mIncome}
        value={l24mIncome}
      />
      <StyledFormHelperText>
        Вот тут нужно написать на что это влияет тро-ло-ло
      </StyledFormHelperText>

    </StyledContainer>



  )
}
