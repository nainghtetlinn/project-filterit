import React, { useState, useEffect, useRef } from 'react';
import { Box, Stack } from '@mui/material';

import DrawImage from '../helper/DrawImage';

interface CanvasProps {
  file: File | null;
  filtered: any;
  returnData: Function;
}

export const Canvas: React.FC<CanvasProps> = React.memo(
  ({ file, filtered, returnData }) => {
    const canvasRef = useRef<HTMLCanvasElement | any>(null);
    const [imgEl, setImgEl] = useState<HTMLImageElement>();

    const [containerHeight, setContainerHeight] = useState<number>(300);

    useEffect(() => {
      if (!file) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.setAttribute('src', reader.result as string);
        img.onload = () => {
          setImgEl(img);
        };
      };
      reader.readAsDataURL(file);
    }, [file]);

    useEffect(() => {
      if (!imgEl) return;
      const { data } = DrawImage(
        imgEl,
        canvasRef.current,
        filtered,
        setContainerHeight
      );
      returnData(data);
    }, [imgEl, filtered, returnData]);

    return (
      <Stack direction='row' justifyContent='center'>
        <Box
          sx={{
            maxHeight: containerHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <canvas ref={canvasRef} width={250} height={250} id='canvas'></canvas>
        </Box>
      </Stack>
    );
  }
);
