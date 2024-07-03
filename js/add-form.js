function nombreDelArchivo() {
    const fileInput = document.querySelector('.input-file input[type="file"]');
    const fileNameInput = document.getElementById('imagen');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : '';
    fileNameInput.value = fileName;
}