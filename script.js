/* script.js */
function downloadMusic() {
    const link = document.getElementById('musicLink').value;

    if (link) {
        // Hacer una llamada a tu backend para gestionar la descarga
        fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: link })
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'musica.mp3'; // Puedes personalizar el nombre del archivo
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert('¡Descarga completada!');
        })
        .catch(error => {
            console.error('Error durante la descarga:', error);
            alert('Hubo un problema al intentar descargar la música.');
        });
    } else {
        alert("Por favor, pega un enlace válido.");
    }
}
