import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown() {
  const [flavor, setflavor] = React.useState('');

  const handleChange = (event) => {
    setflavor(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">flavor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={flavor}
          label="flavor"
          onChange={handleChange}
        >
          <MenuItem value="Sem sabor">Sem sabor</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
