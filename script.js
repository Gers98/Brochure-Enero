const container = document.getElementById('brochure-container');

for (let i = 1; i <= 144; i++) {
    const pageNumber = String(i).padStart(4, '0'); // Formatea el número a 4 dígitos con ceros a la izquierda
    const imagePath = `Brochure_page-${pageNumber}.jpg`;

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `Página ${i} del brochure`;

    // Manejar errores de carga de imágenes (opcional)
    img.onerror = () => {
        console.error(`Error al cargar imagen: ${imagePath}`);
        img.src = 'ruta/a/imagen/de/error.jpg'; // Imagen de reemplazo
    };

    container.appendChild(img);
}