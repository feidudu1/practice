// const cloneNode = document.getElementById('hhhh')
const cloneNode = document.getElementById('targetSvg')
// const cloneNode = document.getElementById('targetSvg')
const xmlSerializer = new XMLSerializer();
const html = xmlSerializer.serializeToString(cloneNode);
console.log(html)
// xmlns="http://www.w3.org/2000/svg" 
// version="1.1" 
// viewBox="0 0 1000 1000"
const svg = '<svg xmlns="http://www.w3.org/2000/svg" data-role="simarts.eda-schematic.window" width="877" height="848" cursor="default" tabindex="-1" id="targetSvg" style="outline: none;"><defs class="css-0"><linearGradient id="subsystem" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgb(251, 252, 255)"/><stop offset="100%" stop-color="rgb(222, 230, 252)"/></linearGradient></defs><svg data-role="block" data-pos="-1,0" x="-2001.5" y="464" viewBox="0 0 128 128" width="2560" height="2560" overflow="visible" style="z-index: unset;"/><svg data-role="block" data-pos="-1,1" x="-2001.5" y="-2096" viewBox="0 0 128 128" width="2560" height="2560" overflow="visible" style="z-index: unset;"><g data-role="edge" data-id="bHAWFLqlhxIuNyPdaRFIy" data-type="_ELECTRIC" data-start-joind-it="paudn9B_yXCPqhyAGb4HE" data-end-joind-it="KZSoNQKfDJXd8ygKCagz-"><path d="M 118 124 L 126 124" stroke="transparent" stroke-width="1" fill="none"/><path d="M 118 124 L 126 124" stroke="rgb(52, 145, 250)" stroke-width="0.125" fill="none" stroke-dasharray=""/></g><circle data-type="_ELECTRIC" data-role="joint" data-id="paudn9B_yXCPqhyAGb4HE" cx="118" cy="124" r="0.2" stroke-width="0.025" class="css-11isyqd" style="cursor: crosshair;"/><circle data-type="_ELECTRIC" data-role="joint" data-id="KZSoNQKfDJXd8ygKCagz-" cx="126" cy="124" r="0.2" stroke-width="0.025" class="css-11isyqd" style="cursor: crosshair;"/><g data-role="model-instance" data-id="iVf2SPIJv68W_yDpI0D2O" opacity="1"><image transform="" href="http://10.101.4.76:9000/global/static/entities/VDC/icons/000.svg" x="117" y="124" width="2" height="4"/><rect data-role="model-instance-frame" x="117" y="124" stroke-width="0.1" class="css-lt0azd"/><circle data-type="_ELECTRIC" data-role="pin" data-id="iVf2SPIJv68W_yDpI0D2O.0" cx="118" cy="124" r="0.2" stroke-width="0.075" class="css-xmwwrv" style="cursor: crosshair;"/><circle data-type="_ELECTRIC" data-role="pin" data-id="iVf2SPIJv68W_yDpI0D2O.1" cx="118" cy="128" r="0.2" stroke-width="0.075" class="css-lkdl96" style="cursor: crosshair;"/></g><g data-role="model-instance" data-id="VgAJS78vzR0PlXD-e6Kni" opacity="1"><image transform="" href="http://10.101.4.76:9000/global/static/entities/VDC/icons/000.svg" x="125" y="124" width="2" height="4"/><rect data-role="model-instance-frame" x="125" y="124" stroke-width="0.1" class="css-lt0azd"/><circle data-type="_ELECTRIC" data-role="pin" data-id="VgAJS78vzR0PlXD-e6Kni.0" cx="126" cy="124" r="0.2" stroke-width="0.075" class="css-xmwwrv" style="cursor: crosshair;"/><circle data-type="_ELECTRIC" data-role="pin" data-id="VgAJS78vzR0PlXD-e6Kni.1" cx="126" cy="128" r="0.2" stroke-width="0.075" class="css-lkdl96" style="cursor: crosshair;"/></g></svg></svg>'
const canvas = document.createElement('canvas');
canvas.id = 'canvas'
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const ctx = canvas.getContext('2d');
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 877, 848, '-50%', '-50%', 400, 400);
  // ctx.drawImage(img, 0, 0);
  // ctx.translate('-50%', '-50%')
  canvas.toBlob((blob) => {
    const blobURL = URL.createObjectURL(blob);
    window.open(blobURL);
    URL.revokeObjectURL(blobURL);
  });
};
img.src = `data:image/svg+xml,${svg}`;
// img.src = `data:image/svg+xml;charset=utf-8,${svg}`;
canvas.style.position = 'absolute'
canvas.style.top = '0'
canvas.style.left = '0'
document.body.append(canvas)
document.body.append(img)

document.addEventListener('mousemove', e => {
  const {clientX, clientY} = e
  // document.getElementById('canvas').style.transform = `translate(${clientX}px, ${clientY}px)`
})

