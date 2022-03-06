const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello, world! Ignite')
})

/**
 * Métodos HTTP
 */

app.get('/courses', (req, res)=>{
  // Busca simples no servidor
})

app.post('/courses', (req, res)=>{
  // Inserir dados no servidor
})

app.put('/courses/:id', (req, res)=>{
  // Modificar dados no servidor
})

app.patch('/courses/:id', (req, res)=>{
  // Modificar dado especifico no servidor
})


app.listen(3333)