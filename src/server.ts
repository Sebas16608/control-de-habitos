import app from "./app";
const port = 3000;

// Importar Models
import User from "./models/user";
import Habits from "./models/habit";


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});