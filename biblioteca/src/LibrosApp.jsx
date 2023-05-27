import { useEffect, useState } from "react"
import { FormularioLibros } from "./componentes/FormularioLibros";
import { TablaLibros } from "./componentes/TablaLibros";
import { getLibros } from "./peticiones/getLibros";
import { postLibros } from "./peticiones/postLibros";
import { editarLibros } from "./peticiones/editarLibros";

export const LibrosApp = () => {

    const [libros, setLibros] = useState([]);
    console.log(libros);

    const agregarLibro = (libro) => {
        setLibros([...libros, libro])
        postLibros(libro);
    }
    const cargueLibros = async () => {
        const datos = await getLibros()
        setLibros(datos);
    }
    useEffect(()=>{
        cargueLibros();
    },[])
    const editarLibros = (libro) => {
        console.log(libro);
        setLibros(libro);
    }
    
    return (
        <>
            <FormularioLibros agregar={(librito) => { agregarLibro(librito) }} />
            <TablaLibros listaLibros={libros} />
        </>
    )
}
