const buttonDownload = document.querySelector('#downloadBtn');

buttonDownload.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './docs/curriculo.pdf';
    link.download = 'Curriculo_Larissa_Carvalho';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});