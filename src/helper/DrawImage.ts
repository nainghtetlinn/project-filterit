const DrawImage = (
  img: HTMLImageElement,
  canvas: HTMLCanvasElement,
  filter: any,
  setContainerHeight: Function
) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  let preferWidth: number;
  let preferHeight: number;
  if (img.width > img.height) {
    preferWidth = 300;
    preferHeight = img.height * (300 / img.width);
  } else {
    preferWidth = img.width * (300 / img.height);
    preferHeight = 300;
  }
  let scale = Math.min(preferWidth / img.width, preferHeight / img.height);

  setContainerHeight(preferHeight);

  canvas.width = img.width;
  canvas.height = img.height;
  canvas.style.transform = `scale(${scale})`;
  ctx.clearRect(0, 0, img.width, img.height);
  ctx.filter = applyFilter(filter);
  ctx.drawImage(img, 0, 0, img.width, img.height);
  return { data: canvas.toDataURL('image/png') };
};

function applyFilter(filter: any[]) {
  const filterObj = filter.reduce((a, v) => ({ ...a, [v.label]: v }), {});

  return `
  brightness(${filterObj.brightness.value + 50}%)
  contrast(${filterObj.contrast.value + 50}%)
  grayscale(${filterObj.grayscale.value}%)
  hue-rotate(${filterObj.hue.value}deg)
  invert(${filterObj.invert.value}%)
  opacity(${filterObj.opacity.value}%)
  saturate(${filterObj.saturation.value}%)
  sepia(${filterObj.sepia.value}%)
  `;
}

export default DrawImage;
