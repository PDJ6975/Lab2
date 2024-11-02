import { Table } from "reactstrap"; // Si el módulo exporta una sola cosa, sin llaves. En otro caso, se usan las llaves.

// Para poder hacer fetch (petición HTTP) al backend

import useFetchState from "../util/useFetchState";
import tokenService from "../services/token.service";

// Definimos los datos de prueba

const imgnotfound = "https://cdn-icons-png.flaticon.com/512/5778/5778223.png";

// SI LO HACEMOS CON DATOS DE MUESTRA -> SIN BACKEND

/*

const achievements = [
    {
        id: 1, name: "Experiencia Básica", description: "Si juegas 10 partidas o más",
        badgeImage: "https://cdn-icons-png.flaticon.com/512/5243/5243423.png",
        threshold: "10", metric: "GAMES_PLAYED"
    },
    {
        id: 2, name: "Explorador", description: "Si juegas 25 partidas o más",
        badgeImage: "https://cdn-icons-png.flaticon.com/512/603/603855.png", threshold: "25",
        metric: "GAMES_PLAYED"
    },
    {
        id: 3, name: "Experto", description: "Si ganas 20 partidas o más",
        badgeImage: "https://cdn-icons-png.flaticon.com/512/4737/4737471.png", threshold: "20",
        metric: "VICTORIES"
    }
]; // Probar a quitar el ; y ver si sigue funcionando

// Definimos el componente usará esos datos de prueba y los mostrará en una tabla

export default function AchievementList() {

    // Defino variable que va a parsear la muestra achievements a las filas de la tabla con los atributos correspondientes
    const achievementList = achievements.map((a) => { // Para cada logro:
        return (

            // Para representar cada fila usamos <tr></tr>
            // Importante el key por id, para que React identifique cada fila de la tabla de forma única.
            // Con <td></td> representamos cada celda de la fila, es decir, cada atributo (td) de cada logro (fila)

            // en la fila de la imagen, en src se pone el enlace a la imagen, alt para ver qué mostrar si no se muestra la imagen, width define el ancho
            // text-center aplica estilo que centra el contenido de la celda
            <tr key={a.id}>

                <td className="text-center">{a.name}</td>
                <td className="text-center"> {a.description} </td>
                <td className="text-center">
                    <img src={a.badgeImage ? a.badgeImage : imgnotfound} alt={a.name}
                        width="50px" />
                </td>
                <td className="text-center"> {a.threshold} </td>
                <td className="text-center"> {a.metric} </td>
                <td className="text-center"> --- </td>

            </tr>
        );
    });

    // El componente devuelve una tabla formada con los achievements parseados

    // "admin-page-container" parece ser un estilo que centra la tabla en la página y la hace más pequeña

    return (
        <div>
            <div className="admin-page-container">
                <h1 className="text-center">Achievements</h1>
                <div>
                    <Table aria-label="achievements" className="mt-4">
                        <thead>
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Description</th>
                                <th className="text-center">Image</th>
                                <th className="text-center">Threshold</th>
                                <th className="text-center">Metric</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>{achievementList}</tbody>
                    </Table>
                </div>
            </div>
        </div>
    );

}

*/

const jwt = tokenService.getLocalAccessToken();

export default function AchievementList() {

    const [achievements, setAchievements] = useFetchState([], `/api/v1/achievements`, jwt);

    // Defino variable que va a parsear la muestra achievements a las filas de la tabla con los atributos correspondientes
    const achievementList = achievements.map((a) => { // Para cada logro:
        return (

            // Para representar cada fila usamos <tr></tr>
            // Importante el key por id, para que React identifique cada fila de la tabla de forma única.
            // Con <td></td> representamos cada celda de la fila, es decir, cada atributo (td) de cada logro (fila)

            // en la fila de la imagen, en src se pone el enlace a la imagen, alt para ver qué mostrar si no se muestra la imagen, width define el ancho
            // text-center aplica estilo que centra el contenido de la celda
            <tr key={a.id}>

                <td className="text-center">{a.name}</td>
                <td className="text-center"> {a.description} </td>
                <td className="text-center">
                    <img src={a.badgeImage ? a.badgeImage : imgnotfound} alt={a.name}
                        width="50px" />
                </td>
                <td className="text-center"> {a.threshold} </td>
                <td className="text-center"> {a.metric} </td>
                <td className="text-center"> --- </td>

            </tr>
        );
    });

    // El componente devuelve una tabla formada con los achievements parseados

    // "admin-page-container" parece ser un estilo que centra la tabla en la página y la hace más pequeña

    return (
        <div>
            <div className="admin-page-container">
                <h1 className="text-center">Achievements</h1>
                <div>
                    <Table aria-label="achievements" className="mt-4">
                        <thead>
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Description</th>
                                <th className="text-center">Image</th>
                                <th className="text-center">Threshold</th>
                                <th className="text-center">Metric</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>{achievementList}</tbody>
                    </Table>
                </div>
            </div>
        </div>
    );

}
