var app = {}

app.carregarDadosCadastro = function(){
       $.ajax("http://192.168.10.239:3000/pessoas.json")
          .done(function (dados) {
               app.escreverDadosTabelaPessoa(dados)

          })
}
app.escreverDadosTabelaPessoa = function(dados){

     var html = '';
     for (i in dados) {
          html += "<tr>"
          html += "<td>" + dados[i].nome + "</td>"
          html += "<td>" + dados[i].sobrenome + "</td>"
          html += "<td>" + dados[i].cpf + "</td>"
          html += "<td>" + dados[i].telefone + "</td>"
          html += "<td>" + dados[i].endereco + "</td>"
          html += "<td> <a href='alterar.html?cpf=" + dados[i].cpf + "' class='btn btn-warning btn-primary' >Alterar</a> </td>"
          html += "<td> <a href='#' onclick='app.excluirDados(\"" + dados[i].cpf + "\")' class='btn btn-danger btn-primary' >Excluir</a> </td>"

     }
     $("#registros #dados").html(html)

}
app.buscarPessoa = function(){
     

     $.ajax("http://192.168.10.239:3000/pessoas.json?nome=" + $(".botoes-pesquisa input#nome").val())
          .done(function (dados) {

               app.escreverDadosTabelaPessoa(dados)

          }).fail(function (err, dados) {
               alert('erro ao buscar')
          })
}

app.excluirDados =function(cpf){
     if(confirm('deseja realmente excluir esta pessoa?')){

     $.ajax("http://192.168.10.239:3000/excluir.json?cpf=" + cpf)
     .done(function (pessoa) {

      window.location.href = 'index.html';

     }).fail( function(err,dados){
          alert('erro ao excluir')
     })

     }

}

app.carregarDadosPessoas = function(){
       var url = window.location.href;
     var url2= new URL(url);
     var cpf = url2.searchParams.get("cpf");
     
   
     if(cpf){
  
  
      $.ajax("http://192.168.10.239:3000/pessoas.json?cpf="+cpf)
           .done(function (pessoa) {
                
               
               $("#nome").val(pessoa.nome)
               
                 $("#sobrenome").val(pessoa.sobrenome)
                  $("#cpf").val(pessoa.cpf)
                   $("#telefone").val(pessoa.telefone)
                    $("#endereco").val(pessoa.endereco)


                //alert(dados)

           })
     }
}


app.enviarDadosServico = function(){

      var url = window.location.href;
      var url2 = new URL(url);
      var cpf = url2.searchParams.get("cpf");
         
      if(cpf){

      $.post("http://192.168.10.239:3000/alterar-pessoa.json?cpfalterar=" + cpf,
      {
           nome:      $("#nome").val(),
           sobrenome: $("#sobrenome").val(),
           cpf:       $("#cpf").val(),
           telefone:  $("#telefone").val(),
           endereco:  $("#endereco").val()
      }
      ).done(function (pessoa) {
               window.location.href = 'index.html';

      }).fail( function(err,pessoa){
                alert("erro ao alterar via serviço"+err)
      })
     }else{
          $.post("http://192.168.10.239:3000/cadastrar-pessoa.json", {
               nome: $("#nome").val(),
               sobrenome: $("#sobrenome").val(),
               cpf: $("#cpf").val(),
               telefone: $("#telefone").val(),
               endereco: $("#endereco").val()
          }).done(function (pessoa) {
               window.location.href = 'index.html';

          }).fail(function (err, pessoa) {
               alert("erro ao criar pessoa via serviço" + err)
          })

     }

}
app.carregarDadosCadastro()
