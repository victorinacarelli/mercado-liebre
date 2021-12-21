const express = require('express');
const path = require('path');

const app = express();

app.get('', (req,res) =>{
    res.send("Ahora si entre");  // Permite enviar texto o codigo HTML
});

// esta funcion marca que en "/mercadoLiebre" vas a poder acceder al html que vos estas usando
app.get('/mercadoLiebre', (req, res) =>{  
    res.sendFile(path.resolve(__dirname, './views/home.html'));
}); 
app.get('/login', (req, res) =>{  
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/register', (req, res) =>{  
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.use(express.static(path.join(__dirname, './public')));  

//el primer parametro del listen dice en que numero de "localhost:" va a estar
app.listen(process.env.PORT || 3002, () => {
    console.log("Servidor corriendo");
});

//Escribir "npm start" para levantar el servidor

