const express = require("express")

const app = express();

const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

const Post = require('./models/Post.js')


app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.get('/cad', function(req, res){
    res.render('index.handlebars')
})

app.post('/add', function(req, res){
Post.create({
  Setor:req.body.enfermagem,
  Nota: req.body.notaenfermagem,
  Mensagem:req.body.mensagemenfermagem
}) .then(function(){
   res.redirect('/cad')
}).catch(function(erro){
   res.send("erro"+erro)
})

   
})


app.post('/tes', function(req, res){
  Post.create({
    Setor:req.body.direcaomedica,
    Nota:req.body.notadirecaomedica,
    Mensagem:req.body.mensagemdirecaomedica
  }).then(function(){
   res.redirect('/cad')
}).catch(function(erro){
   res.send("erro"+erro)
})

   
})
  
app.post('/com', function(req, res){
  Post.create({
    Setor:req.body.comercial,
    Nota:req.body.notacomercial,
    Mensagem:req.body.mensagemcomercial
  }) .then(function(){
   res.redirect('/cad')
}).catch(function(erro){
   res.send("erro"+erro)
})

   
})

  app.post('/fin', function(req, res){
   Post.create({
     Setor:req.body.financeiro,
     Nota: req.body.notafinanceiro,
     Mensagem:req.body.mensagemfinanceiro
   }) .then(function(){
      res.redirect('/cad')
   }).catch(function(erro){
      res.send("erro"+erro)
   })
   
      
   })

   app.post('/fat', function(req, res){
      Post.create({
        Setor:req.body.faturamento,
        Nota: req.body.notafaturamento,
        Mensagem:req.body.mensagemfaturamento
      }) .then(function(){
         res.redirect('/cad')
      }).catch(function(erro){
         res.send("erro"+erro)
      })
      
         
      })

      app.post('/log', function(req, res){
         Post.create({
           Setor:req.body.logisticaesuprimentos,
           Nota: req.body.notalogisticaesuprimentos,
           Mensagem:req.body.mensagemlogisticaesuprimentos
         }) .then(function(){
            res.redirect('/cad')
         }).catch(function(erro){
            res.send("erro"+erro)
         })
         
            
         })

         app.post('/aud', function(req, res){
            Post.create({
              Setor:req.body.autorizacaoeauditoria,
              Nota: req.body.notaautorizacaoeauditoria,
              Mensagem:req.body.mensagemautorizacaoeauditoria
            }) .then(function(){
               res.redirect('/cad')
            }).catch(function(erro){
               res.send("erro"+erro)
            })
            
               
            })

            app.post('/man', function(req, res){
               Post.create({
                 Setor:req.body.manutencao,
                 Nota: req.body.notamanutencao,
                 Mensagem:req.body.mensagemmanutencao
               }) .then(function(){
                  res.redirect('/cad')
               }).catch(function(erro){
                  res.send("erro"+erro)
               })
               
                  
               })

               app.post('/hot', function(req, res){
                  Post.create({
                    Setor:req.body.hotelaria,
                    Nota: req.body.notahotelaria,
                    Mensagem:req.body.mensagemhotelaria
                  }) .then(function(){
                     res.redirect('/cad')
                  }).catch(function(erro){
                     res.send("erro"+erro)
                  })
                  
                     
                  })



















const PORT = process.env.PORT || 3380

app.listen(3380, function(){
    console.log("server rodando")
})  