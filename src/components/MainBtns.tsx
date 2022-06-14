import React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface MainBtnsProps {
  reset: any;
  download: any;
}

export const MainBtns: React.FC<MainBtnsProps> = ({ reset, download }) => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ py: 2 }}
    >
      <label htmlFor='upload-img'>
        <Button
          component='span'
          variant='outlined'
          size='small'
          endIcon={<FileUploadIcon />}
        >
          Upload
        </Button>
      </label>
      <Button
        component='span'
        variant='contained'
        size='small'
        endIcon={<FileDownloadIcon />}
        sx={{ ml: 1 }}
        onClick={download}
      >
        Download
      </Button>

      <IconButton color='primary' size='small' onClick={reset}>
        <RestartAltIcon />
      </IconButton>
    </Stack>
  );
};
