import { useState } from "react"

export const FormularioEstudiante = ({ agregar }) => {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");

    const guardarLibro = (event) => {
        let libro = {
            titulo: titulo,
            autor: autor,
            genero: genero
        }
        agregar(libro)
        setTitulo("");
        setAutor("");
        setGenero("");
    }

    function habilitarButton() {
        var titu = document.getElementById("titulo").value
        var aut = document.getElementById("autor").value
        var cate = document.getElementById("categoria").value
        if (titu == "") {
            document.getElementById("registrar").disabled = true;
        } else if (aut == "") {
            document.getElementById("registrar").disabled = true;
        } else if (cate == "") {
            document.getElementById("registrar").disabled = true;
        } else {
            document.getElementById("registrar").disabled = false;
        }
    }

    return (
        <>
            <script>

            </script>
            <h1 className="text-center text-light " style={{ fontSize: "100px", backgroundColor: "#AD9978" }}>Biblioteca</h1>

            <form onSubmit={guardarLibro} style={{ backgroundColor: "#AD9978" }}>
                <div className="form-group input-group">
                    <label class="input-group-text futurama " for="inputGroupSelect01" >Titulo</label>
                    <input type="text" className="form-control" id="titulo" placeholder="Titulo" value={titulo} onChange={(event) => { setTitulo(event.target.value); habilitarButton(); }} />
                </div>
                <br />
                <div className="form-group input-group ">
                    <label class="input-group-text futurama" for="inputGroupSelect01">Autor</label>
                    <input type="text" className="form-control" id="autor" placeholder="Autor" value={autor} onChange={(event) => { setAutor(event.target.value); habilitarButton(); }} />
                </div>
                <br />
                <div className="form-group input-group">
                    <label class="input-group-text futurama" for="inputGroupSelect01">Genero</label>
                    <br></br>
                    <select id="categoria" value={genero} onChange={(event) => { setGenero(event.target.value); habilitarButton(); }}>
                        <option value="">--Seleccione el genero--</option>
                        <option value="1">Ficcion</option>
                        <option value="2">Novela</option>
                        <option value="3">Suspenso</option>
                        <option value="4">Fantasia</option>
                        <option value="5">Romance</option>
                        <option value="6">Historia</option>

                    </select>
                </div>
                <br />

                <button id="registrar" type="submit" className="btn btn-primary" disabled>Registrar</button>
            </form>

            <style>

                {`
                 ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: #6fc1ff;
          }
          .futurama{
            background-color: #222;
            color: #fff;
            padding: 8px 12px;
            border-radius: 4px;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            text-transform: uppercase;
          }

        `}

            </style>
        </>
    )
}