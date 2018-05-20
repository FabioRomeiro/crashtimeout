var $formularioRedacao = $(".envio-redacao");
var $listaRedacao = $(".lista-redacao");
var $linkFormulario = $(".form");
var $linkLista = $(".lista");
var $tituloContent = $(".content-title");

$linkFormulario.click(function() {
   if ($formularioRedacao.hasClass("sumiu")) {
     $tituloContent.text("Envio de Redação");
     $formularioRedacao.removeClass("sumiu");
   } else {
     $tituloContent.text("Escolha uma opção!")
     $formularioRedacao.addClass("sumiu");
   }

   if (!$listaRedacao.hasClass("sumiu")) {
     $listaRedacao.addClass("sumiu");
   }
 });

$linkLista.click(function() {
   if ($listaRedacao.hasClass("sumiu")) {
     $tituloContent.text("Suas redações");
     $listaRedacao.removeClass("sumiu");
   } else {
     $tituloContent.text("Escolha uma opção!")
     $listaRedacao.addClass("sumiu");
   }

   if (!$formularioRedacao.hasClass("sumiu")) {
     $formularioRedacao.addClass("sumiu");
   }
 });
