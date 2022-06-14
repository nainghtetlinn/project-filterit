import { Box, Tabs, Tab } from '@mui/material';

interface FiltersProps {
  activeEffect: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const filterOptions = [
  'None',
  'Vintage',
  'Lomo',
  'Clarity',
  'Sin City',
  'Sunrise',
  'Cross Process',
  'Orange Peel',
  'Love',
  'Grungy',
  'Jarques',
  'Pinhole',
  'Old Boot',
  'Glowing Sun',
  'Hazy Days',
  'Her Majesty',
  'Nostalgia',
  'Hemingway',
  'Concentrate',
];

export const Filters: React.FC<FiltersProps> = ({ activeEffect, onChange }) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 480 },
      }}
    >
      <Tabs
        value={activeEffect}
        onChange={onChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'
      >
        {filterOptions.map((f, i) => {
          return <Tab label={f} key={i} sx={{ textTransform: 'capitalize' }} />;
        })}
      </Tabs>
    </Box>
  );
};
