import { Button, Stack } from '@mui/material';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface ButtonsProps {}

const Buttons: React.FC<ButtonsProps> = ({}) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='center'
      spacing={2}
    >
      <Button variant='contained' startIcon={<FileDownloadIcon />}>
        Download
      </Button>
      <Button variant='outlined' startIcon={<RestartAltIcon />}>
        Reset
      </Button>
    </Stack>
  );
};

export default Buttons;
