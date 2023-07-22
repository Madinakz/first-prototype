import styled from '@emotion/styled';

// Material UI elements
import {
  Typography,
  Container,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Tooltip
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Styled Container component
export const StyledContainer = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

// Styled Typography component
export const StyledHeading = styled(Typography)`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
  font-family: 'Monaco', monospace;
`;

export const StyledSubtitle = styled(Typography)`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Monaco', monospace;
`;

export const StyledResults = styled(Typography)`
  font-size: 1rem;
  text-align: center;
  margin: 2rem;
  font-family: 'Monaco', monospace;
`;

export const StyledFooter = styled(Typography)`
  font-size: 0.8rem;
  text-align: center;
  margin: 2rem;
  font-family: 'Monaco', monospace;
`;

export const StyledSubheader = styled(Typography)`
  font-size: 1rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Monaco', monospace;
`;

// Styled DatePicker component
export const StyledDatePicker = styled(DatePicker)`
  margin: 0 auto;
  font-family: 'Monaco', monospace;
`;

// Styled FormHelperText component
export const StyledFormHelperText = styled(FormHelperText)`
  text-align: left;
  font-family: 'Monaco', monospace;
`;

// Styled FormControl component
export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

// Styled InputLabel component
export const StyledInputLabel = styled(InputLabel)`
  font-family: 'Monaco', monospace;
`;

// Styled Select component
export const StyledSelect = styled(Select)`
  font-family: 'Monaco', monospace;
`;

// Styled MenuItem component
export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Monaco', monospace;
`;

// Styled TextField component
export const StyledTextField = styled(TextField)`
  width: 100%;
  font-family: 'Monaco', monospace;
`;

// Styled FormControlLabel with Switch control
export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiSwitch-colorPrimary.Mui-checked {
    color: #2196f3; /* Replace with your desired color for the checked state */
  }
  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: #2196f3; /* Replace with your desired color for the checked state */
  }
  font-family: 'Monaco', monospace;
`;

// Styled Tooltip component
export const StyledTooltip = styled(Tooltip)`
  .MuiTooltip-tooltip {
    background-color: #2196f3; /* Replace with your desired background color */
    color: #fff; /* Replace with your desired text color */
    font-size: 14px; /* Replace with your desired font size */
  }
`;