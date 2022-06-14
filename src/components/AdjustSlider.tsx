import { Box, Typography, Slider } from '@mui/material';

interface AdjustSliderProps {
  filter: {
    label: string;
    value: number;
    minVal: number;
    maxVal: number;
  };
  onChange: (event: Event, newVale: number | number[]) => void;
}

export const AdjustSlider: React.FC<AdjustSliderProps> = ({
  filter,
  onChange,
}) => {
  const { label, value, minVal, maxVal } = filter;

  return (
    <Box sx={{ maxWidth: 300, width: '100%', px: 1 }}>
      <Typography sx={{ textTransform: 'capitalize' }}>
        {label}: {value}
      </Typography>
      <Slider
        min={minVal}
        max={maxVal}
        size='small'
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};
