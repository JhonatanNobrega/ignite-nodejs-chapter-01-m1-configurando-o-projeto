const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Hello, world! Ignite')
})

/**
 * Métodos HTTP
 */
app.get('/courses', (req, res)=>{
  // Busca simples no servidor
  return res.send('Feito')
})

app.post('/courses', (req, res)=>{
  // Inserir dados no servidor
  console.log(req.params);
  return res.send('Feito')
})

app.put('/courses/:id', (req, res)=>{
  // Modificar dados no servidor
  return res.send('Feito')
})

app.patch('/courses/:id', (req, res)=>{
  // Modificar dado especifico no servidor
  return res.send('Feito')
})

app.delete('/courses/:id', (req, res)=>{
  // Modificar dado especifico no servidor
  return res.send('Feito')
})

app.listen(3333)