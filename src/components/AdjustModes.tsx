import { Box, Tabs, Tab } from '@mui/material';

interface AdjustModesProps {
  modes: string[];
  activeEffect: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const AdjustModes: React.FC<AdjustModesProps> = ({
  modes,
  activeEffect,
  onChange,
}) => {
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
        {modes.map((a, i) => {
          return <Tab label={a} key={i} sx={{ textTransform: 'capitalize' }} />;
        })}
      </Tabs>
    </Box>
  );
};
