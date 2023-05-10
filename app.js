const express = require('express');
const hbs = require('hbs');
require('dotenv').config();//Es es el paquete dotenv que ayuda a que las información guarda en el doc .env se conviertan en variables de entorno

const app = express();
const port = process.env.PORT;






//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {});

//Servir contenido estático
app.use(express.static('public') );

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Marcos González',
        titulo: 'Curso node'
    });//tenemos la capacidad de reutilizar muchas partes del código con este render
  });//en el segundo argumento mando las opciones


app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Marcos González',
        titulo: 'Curso node'
    });//con esta parte la página funciona igual que si no tiene extensión .html
  });

  app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Marcos González',
        titulo: 'Curso node'
    });//con esta parte la página funciona igual que si no tiene extensión .html
  });

  app.get('*', (req, res) => {
    res.sendFile(__dirname +'Jesucristo, te has confundido');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });