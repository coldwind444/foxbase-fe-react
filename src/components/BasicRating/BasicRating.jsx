import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'goldenrod', // filled star color
  },
  '& .MuiRating-iconHover': {
    color: 'goldenrod', // hover color
  },
  '& .MuiRating-iconEmpty': {
    color: 'goldenrod', // outlined (empty) star color
  },
});

export default function BasicRating() {
  const [value, setValue] = React.useState(3);

  return (
    <Box>
      <StyledRating
        name="simple-controlled"
        size="large"
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
