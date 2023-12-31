const express = require('express');
const db = require('../backend/database'); // Adjust the path to match your file structure
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views')); // Adjust the path
app.use(express.static(path.join(__dirname, '../frontend/public'))); // Adjust the path
app.use(express.urlencoded({ extended: true }));

// Mostrar formulario para agregar nueva información
app.get('/add', (req, res) => {
  res.render('addInfo');
});

// Crear nueva información
app.post('/info', (req, res) => {
  const { texto } = req.body;
  if (!texto) {
    res.status(400).send({ error: 'Texto es requerido' });
    return;
  }

  db.run('INSERT INTO info (texto) VALUES (?)', [texto], function(err) {
    if (err) {
      res.status(500).send({ error: err.message });
      return;
    }
    res.status(201).send({ id: this.lastID });
  });
});

// Obtener toda la información
app.get('/info', (req, res) => {
  db.all('SELECT * FROM info', (err, rows) => {
    if (err) {
      res.status(500).send({ error: err.message });
      return;
    }
    res.render('info', { info: rows });
  });
});

// Obtener información por ID
app.get('/info/:id', (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM info WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).send({ error: err.message });
      return;
    }
    res.send({ info: row });
  });
});

// Editar información existente
app.put('/info/:id', (req, res) => {
    const { id } = req.params;
    const { texto } = req.body;
    if (!texto) {
      res.status(400).send({ error: 'Texto es requerido' });
      return;
    }
    db.run('UPDATE info SET texto = ? WHERE id = ?', [texto, id], function(err) {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }
      res.send({ rowsAffected: this.changes });
    }); 
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
