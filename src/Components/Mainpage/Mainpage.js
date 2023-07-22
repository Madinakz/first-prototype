import React from 'react';
import { NumericFormat } from 'react-number-format';

import './Mainpage.css'
import { ChildCareTwoTone, ChildFriendlyTwoTone, CalendarMonthTwoTone, Face3TwoTone, FavoriteTwoTone } from '@mui/icons-material';
import {Typography, Container, InputLabel, MenuItem, FormControl, Select, FormHelperText, TextField, Switch, FormControlLabel, Paper, Box} from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';






export default function Mainpage(){

    const [child, setChild] = React.useState('1');

    const handleChangeChild = (event) => {
      setChild(event.target.value);
      
    };

    const [employment, setEmployment] = React.useState('1');

    const handleChangeEmployment = (event) => {
        setEmployment(event.target.value);
      
    };
    
    const [condition, setCondition] = React.useState('126');

    const handleChangeCondition = (event) => {
        setCondition(event.target.value);
        
    };

    const [l12mIncome, setl12mIncome] = React.useState('');

    const handleChangel12mIncome= (event) => {
        setl12mIncome(event.target.value);
      
    };

    const [l24mIncome, setl24mIncome] = React.useState('');

    const handleChangel24mIncome= (event) => {
        setl24mIncome(event.target.value);
      
    };
    
    const [checked, setCheckedDetailedCalc] = React.useState(true);

    const handleChangeDetailedCalc = (event) => {
        setCheckedDetailedCalc(event.target.checked);
    };

    

    const [selectedDate, setSelectedDate] = React.useState(null);
    const handleDateChange = (date) => {
    setSelectedDate(date);
    };

    const months = Array.from({ length: 24 }, (_, index) => {
        const currentDate = selectedDate ? new Date(selectedDate) : new Date();
        currentDate.setDate(1); // Set the date to 1st day of the month
        currentDate.setMonth(currentDate.getMonth() - index);
        
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        return `${month} ${year}`;
      }).slice(-24);

    const formatDate = (date) => {
  if (date) {
    const monthNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];
    return monthNames[date.getMonth()] + ' ' + date.getFullYear();
  }
  return '';
};

    const EmploymentLimit = employment > 2 ? 0 : 1;
    const Income12Limit = l12mIncome > 490000 ? 490000 : l12mIncome;
    const pmt_before = condition / 30 * Income12Limit * 0.9 * EmploymentLimit
    
    
    const Income24Limit = l24mIncome > 490000 ? 490000 : l24mIncome;
    const pmt_after = 0.4 * Income24Limit * 0.9
    
    //let sum = 0;
    const [sum, setSum] = React.useState(0);

    return(
        <div classname='mainpage'>
            {/* <Container maxWidth="lg">
                <Typography variant="h4" align="center">
                    Онлайн калькулятор для расчета декретных выплат и пособий в Казaхстане
                </Typography>
                <Typography variant="subtitle2" align="center">
                    Онлайн калькулятор декретных является уникальным сервисом в Казахстане и поможет Вам произвести 
                    необходимые расчеты декретных пособий и социальныхвыплат, которые будут назначены женщинам в связи с
                    рождением ребенка (детей). Все что необходимо знать, чтобы получить расчет, — это среднемесячный 
                    доход за последние 1 и 2 года, а с помощью расширенного расчета можно максимально точно вычислить размер декретных.
                </Typography>
            </Container> */}
        
            <Container>
                <p>
                    Дата рождения ребенка:
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="ДД-ММ-ГГГГ"
                        disablePast="true"
                        format="DD-MM-YYYY"
                        onChange={handleDateChange}
                    />
                </LocalizationProvider>
                <FormHelperText>
                        Планируемая дата рождения ребенка
                </FormHelperText>

                <p>
                    Ребенок:
                </p>
                <FormControl fullWidth>
                    <InputLabel id="ChildSelectLabel">Ребенок</InputLabel>
                    <Select
                        labelId="ChildSelectLabel"
                        id="ChildSelect"
                        value={child}
                        label="Ребенок"
                        onChange={handleChangeChild}
                    >
                    <MenuItem value={1}>Первый ребенок</MenuItem>
                    <MenuItem value={2}>Второй ребенок</MenuItem>
                    <MenuItem value={3}>Третий ребенок</MenuItem>
                    <MenuItem value={4}>Четвертый и более ребенок</MenuItem>
                    </Select>
                    <FormHelperText>
                        Государственное единовременное пособие в связи с рождением ребенка.
                    </FormHelperText>
                </FormControl>
                <Typography>
                    Данное пособие выплачивается всем родившим женщинам: как работающим, так и не работающим, из государственного бюджета.
                    Размер пособия на рождение ребенка фиксированный и зависит от количества детей.
                    Выплата соответственно составит:
                </Typography>
                
                
                <p>
                    Занятость:
                </p>
                <FormControl fullWidth>
                    <InputLabel id="EmploymentSelectLabel">Занятость</InputLabel>
                    <Select
                        labelId="EmploymentSelectLabel"
                        id="EmploymentSelect"
                        value={employment}
                        label="Занятость"
                        onChange={handleChangeEmployment}
                    >
                    <MenuItem value={1}>Наемный работник</MenuItem>
                    <MenuItem value={2}>Индивидуальный предприниматель (ИП)</MenuItem>
                    <MenuItem value={3}>Безработная</MenuItem>
                    </Select>
                    <FormHelperText>
                        Текущая занятость женщины
                    </FormHelperText>
                </FormControl>

                <p>
                    Условия родов и льготы для женщин:
                </p>
                <FormControl fullWidth>
                    <InputLabel id="ConditionSelectLabel">Условия родов и льготы для женщин</InputLabel>
                    <Select
                        labelId="ConditionSelectLabel"
                        id="ConditionSelect"
                        value={condition}
                        label="Условия родов и льготы для женщин"
                        onChange={handleChangeCondition}
                    >
                    <MenuItem value={126}>для нормально протекающих родов</MenuItem>
                    <MenuItem value={140}>в случае осложненных родов или рождения двух или более детей</MenuItem>
                    <MenuItem value={170}>для женщин, проживающих на территориях, подвергшихся воздействию ядерных испытаний, при нормальных родах</MenuItem>
                    <MenuItem value={184}>для женщин, проживающих на территориях, подвергшихся воздействию ядерных испытаний, в случае осложненных родов или при рождении двух и более детей</MenuItem>
                    </Select>
                    <FormHelperText>
                        Условия родов и льготы для женщин
                    </FormHelperText>
                </FormControl>
                <Typography>
                    {condition === 140 ? (
                        <p><CalendarMonthTwoTone />С тридцатой недели беременности на 140 календарных дней (из них 70 — до родов, и 70 — после).</p>
                    ) : condition === 170 ? (
                        <p><CalendarMonthTwoTone />С двадцать седьмой недели беременности на 170 календарных дней (из них 91 — до родов, и 79 — после).</p>
                    ) : condition === 184 ? (
                        <p><CalendarMonthTwoTone />С двадцать седьмой недели беременности на 184 календарных дней (из них 91 — до родов, и 93 — после).</p>
                    ) : (
                        <p><CalendarMonthTwoTone />С тридцатой недели беременности на 126 календарных дней (из них 70 — до родов, и 56 — после).</p>
                    )}
                </Typography>
                
                <FormControlLabel
                    control={<Switch
                        checked={checked}
                        onChange={handleChangeDetailedCalc}
                        color="primary"
                    />}
                    label="Детализированный расчет"
                />
                {checked ? (
                    <div>
                            <p>
                            Среднемесячный доход за последние 24 месяца:
                            </p>
                            {months.map((month)=> (
                                <grid item key = {month}>

                                    <TextField
                                        label={month}
                                        variant="outlined"
                                        type="number"
                                        helperText="Some important text"
                                        onBlur={(event) => {
                                            const value = Number(event.target.value);
                                            const newSum = sum + value;
                                            setSum(newSum);
                                          }}
                                    />
                                </grid>
                            ))}
                            <p>{sum}</p>
                    </div>
                    ) : (
                    <div>
                        <p>
                        Среднемесячный доход за последние 12 месяцев:
                        </p>
                        <TextField
                            id="standard-basic1"
                            label="Среднемесячный доход за последние 12 месяцев"
                            variant="outlined"
                            type="number"
                            helperText="Some important text"
                            onChange={handleChangel12mIncome}
                            value={l12mIncome}
                        />
                
                        <p>
                            Среднемесячный доход за последние 24 месяца:
                        </p>
                        <TextField
                            id="standard-basic2"
                            label="Среднемесячный доход за последние 24 месяца"
                            variant="outlined"
                            type="number"
                            helperText="Some important text"
                            onChange={handleChangel24mIncome}
                            value={l24mIncome}
                        />
                    </div>
                )}




                <Typography>
                    <Face3TwoTone/>
                    Социальная выплата по беременности и родам в связи с потерей дохода (единовременно до родов): {pmt_before} тенге
                </Typography>


                <Typography>
                    {child < 4 ? (
                        <p><ChildCareTwoTone />Государственное пособие в связи с рождением ребенка (единовременно после родов): 131 100 тенге в 2023 году (38 МРП)</p>
                    ) : (
                        <p><ChildCareTwoTone />Государственное пособие в связи с рождением ребенка (единовременно после родов): 217 350 тенге в 2023 году (63 МРП)</p>
                    )}
                </Typography>

                <Typography>
                    
                    {employment === 3 && child === 1 ? (
                        <p><ChildFriendlyTwoTone />Социальная выплата по уходу за ребенком по достижении им 1,5 лет (ежемесячно после родов): 19 872 тенге (5,76 МРП)</p>
                    ) : employment === 3 && child === 2 ? (
                        <p><ChildFriendlyTwoTone />Социальная выплата по уходу за ребенком по достижении им 1,5 лет (ежемесячно после родов): 23 495 тенге (6,81 МРП).</p>
                    ) : employment === 3 && child === 3 ? (
                        <p><ChildFriendlyTwoTone />Социальная выплата по уходу за ребенком по достижении им 1,5 лет (ежемесячно после родов): 27 083 тенге (7,85 МРП).</p>
                    ) : employment === 3 && child === 4 ? (
                        <p><ChildFriendlyTwoTone />Социальная выплата по уходу за ребенком по достижении им 1,5 лет (ежемесячно после родов): 30 705 тенге (8,90 МРП).</p>
                    ) : (
                        <p><ChildFriendlyTwoTone />Социальная выплата по уходу за ребенком по достижении им 1,5 лет (ежемесячно после родов): {pmt_after} тенге</p>
                    )}

                    
                </Typography>

            </Container>
            <footer>
                <Typography variant="subtitle2" align="center">
                    Coded with <FavoriteTwoTone /> by Madina
                </Typography>
            </footer>
        </div>


    )
}
