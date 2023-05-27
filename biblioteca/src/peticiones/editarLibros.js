export const editarLibros = async(libro) => {
    const url = `http://localhost:8080/libro/modificar/{codigo}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: {
            titulo: libro.titulo,
            autor: libro.autor,          
            genero: libro.genero
        }
    });
    const data = await resp.json();
}