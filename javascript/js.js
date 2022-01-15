
var btnResponsiveMenu = document.querySelector("#menu-responsivo");
var btnResponsiveImg = document.getElementById("menu-responsivo-img");

document.querySelector("#menu-responsivo").addEventListener("click", function() {

    if(document.querySelector("#main_header_content ul").style.display == 'flex') {
        document.querySelector("#main_header_content ul").style.display = 'none';
        

        btnResponsiveImg.setAttribute("src", "img/responsividade-imobiliaria.svg");
    }
    else{
        document.querySelector("#main_header_content ul").style.display = 'flex';
        
        btnResponsiveImg.setAttribute("src", "img/responsividade-imobiliaria-x.svg");
    }
})
