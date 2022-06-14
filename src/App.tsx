import { useRef, useState } from 'react';
import { Stack, Grid, Box } from '@mui/material';

import Header from './components/Header';
import { AdjustSlider, Canvas, MainBtns, AdjustModes } from './components';

const originalFilter = [
  { label: 'brightness', value: 50, minVal: 0, maxVal: 100 },
  { label: 'contrast', value: 50, minVal: 0, maxVal: 100 },
  { label: 'grayscale', value: 0, minVal: 0, maxVal: 100 },
  { label: 'hue', value: 0, minVal: 0, maxVal: 360 },
  { label: 'invert', value: 0, minVal: 0, maxVal: 100 },
  { label: 'opacity', value: 100, minVal: 0, maxVal: 100 },
  { label: 'saturation', value: 100, minVal: 0, maxVal: 200 },
  { label: 'sepia', value: 0, minVal: 0, maxVal: 100 },
];

function App() {
  const headerRef = useRef<HTMLDivElement | any>(null);
  const [file, setFile] = useState<File | null | any>(null);
  const [fileUrl, setFileUrl] = useState<string | any>('');

  const [activeEffect, setActiveEffect] = useState<number>(0);
  const [appliedFilter, setAppliedFilter] = useState([
    { label: 'brightness', value: 50, minVal: 0, maxVal: 100 },
    { label: 'contrast', value: 50, minVal: 0, maxVal: 100 },
    { label: 'grayscale', value: 0, minVal: 0, maxVal: 100 },
    { label: 'hue', value: 0, minVal: 0, maxVal: 360 },
    { label: 'invert', value: 0, minVal: 0, maxVal: 100 },
    { label: 'opacity', value: 100, minVal: 0, maxVal: 100 },
    { label: 'saturation', value: 100, minVal: 0, maxVal: 200 },
    { label: 'sepia', value: 0, minVal: 0, maxVal: 100 },
  ]);

  const getActiveAdjust = (i: number) => {
    return appliedFilter[i];
  };

  const handleUpload: React.ChangeEventHandler<HTMLInputElement | any> = e => {
    const f = e.currentTarget.files[0];
    if (f && f.type.substr(0, 5) === 'image') {
      setFile(f);
    } else {
      setFile(null);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newAppliedFilter = appliedFilter.map((f, i) => {
      if (i === activeEffect) {
        f.value = newValue as number;
      }
      return f;
    });
    setAppliedFilter(newAppliedFilter);
  };

  const handleReset = () => {
    setAppliedFilter(originalFilter);
  };

  const handleDownload = () => {
    if (!file && !fileUrl) return;
    const createEl = document.createElement('a');
    createEl.href = fileUrl;
    createEl.download = 'filtered_' + file.name;
    createEl.click();
    createEl.remove();
  };

  return (
    <>
      <input
        accept='image/*'
        id='upload-img'
        type='file'
        onChange={handleUpload}
        hidden
      />
      <div ref={headerRef}>
        <Header />
      </div>

      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            <Canvas
              file={file}
              filtered={appliedFilter}
              returnData={setFileUrl}
            />
            <MainBtns reset={handleReset} download={handleDownload} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack
              direction='column'
              alignItems='center'
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <AdjustSlider
                filter={getActiveAdjust(activeEffect)}
                onChange={handleChange}
              />

              <AdjustModes
                modes={appliedFilter.map(f => f.label)}
                activeEffect={activeEffect}
                onChange={(event: React.SyntheticEvent, newValue: number) => {
                  setActiveEffect(newValue);
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
