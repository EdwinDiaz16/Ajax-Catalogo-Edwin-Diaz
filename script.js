$(document).ready(function () {
    $("#btn-get-users").click(function (e) {
        e.preventDefault();
        getUsers();
    })

    function getUsers() {
        $.ajax({
            url: "https://mini-shop-rg.herokuapp.com/products",
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var divListaUsuarios = $("#lista-usuarios");
                console.log(respuesta);
                var htmlProducts = "";
                var collectionUsers = respuesta;
                for (var i = 0;i < collectionUsers.length; i++) {
                    var user = collectionUsers[i];
                    htmlProducts += `<div class="todo"><div class="nombre">${user.name}</div><br> <div class="price">$${user.price}</div><br>
                    <div class="description"> ${user.description}</div><br>
                    <div class="product"><img src=${user.image}></div></div>
                     `
                }
                divListaUsuarios.html(htmlProducts)
            }
        })
        
    }
    
})
