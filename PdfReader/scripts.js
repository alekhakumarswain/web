document.getElementById('file-input').addEventListener('change', handleFileSelect);
document.getElementById('prev-page').addEventListener('click', showPreviousPage);
document.getElementById('next-page').addEventListener('click', showNextPage);
document.getElementById('zoom-in').addEventListener('click', zoomIn);
document.getElementById('zoom-out').addEventListener('click', zoomOut);
document.getElementById('download').addEventListener('click', downloadFile);

let pdfDoc = null,
    currentPage = 1,
    scale = 1.0;

function handleFileSelect(event) {
    const file = event.target.files[0];
    const fileType = file.type;

    if (fileType === 'application/pdf') {
        const fileReader = new FileReader();
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);
            pdfjsLib.getDocument(typedarray).promise.then(pdf => {
                pdfDoc = pdf;
                currentPage = 1;
                renderPage();
            });
        };
        fileReader.readAsArrayBuffer(file);
    } else if (fileType.startsWith('image/')) {
        const img = document.getElementById('image-viewer');
        img.src = URL.createObjectURL(file);
        img.style.display = 'block';
        document.getElementById('pdf-canvas').style.display = 'none';
    }
}

function renderPage() {
    pdfDoc.getPage(currentPage).then(page => {
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
}

function showPreviousPage() {
    if (currentPage <= 1) return;
    currentPage--;
    renderPage();
}

function showNextPage() {
    if (currentPage >= pdfDoc.numPages) return;
    currentPage++;
    renderPage();
}

function zoomIn() {
    scale += 0.1;
    renderPage();
}

function zoomOut() {
    if (scale <= 0.1) return;
    scale -= 0.1;
    renderPage();
}

function downloadFile() {
    const link = document.createElement('a');
    link.href = document.getElementById('file-input').files[0];
    link.download = document.getElementById('file-input').files[0].name;
    link.click();
}
