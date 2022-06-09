import { useEffect, useRef, useState } from 'react';
import { Container, Box, Button, Stack } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import Header from './components/Header';

function App() {
  const canvasRef = useRef<HTMLCanvasElement | any>(null);

  const [file, setFile] = useState<File | null>(null);

  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);

  const handleUpload: React.ChangeEventHandler<HTMLInputElement | any> = e => {
    const f = e.currentTarget.files[0];
    if (f && f.type.substr(0, 5) === 'image') {
      setFile(f);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    if (file) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          if (img.width > img.height) {
            setWidth(300);
            setHeight(img.height * (300 / img.width));
          } else {
            setHeight(300);
            setWidth(img.width * (300 / img.height));
          }
          let scale = Math.min(width / img.width, height, img.height);

          setTimeout(() => {
            ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
          }, 500);
        };
      };
      reader.readAsDataURL(file);
    }
  }, [file, height, width]);

  return (
    <>
      <Header />
      <Container maxWidth='sm'>
        <Stack direction='row' justifyContent='center' sx={{ mt: 4 }}>
          <Box
            sx={{
              maxWidth: '300px',
              maxHeight: '300px',
              minHeight: '300px',
              minWidth: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
            }}
          >
            <canvas
              ref={canvasRef}
              height={height}
              width={width}
              id='canvas'
            ></canvas>
          </Box>
        </Stack>
        <Box sx={{ p: 2 }}>
          <label htmlFor='upload-img'>
            <input
              accept='image/*'
              type='file'
              name='image'
              id='upload-img'
              onChange={handleUpload}
            />
            <Button variant='contained' startIcon={<FileUploadIcon />}>
              Upload
            </Button>
          </label>
        </Box>
      </Container>
    </>
  );
}

export default App;
