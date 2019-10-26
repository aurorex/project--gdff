(function(){
   var radioEsfera = document.getElementById('radio-esfera');
   var aristaCubo = document.getElementById('arista-cubo');
   var radioCono = document.getElementById('radio-cono');
   var alturaCono = document.getElementById('altura-cono');

  $('#btn-esfera').on('click', function(){
     var radioToNumber = parseInt(radioEsfera.value);
     var rspta = (4*3.1416* Math.pow(radioToNumber,3))/3 ;
     $('#rspta-esfera').empty();

     $('#rspta-esfera').append(rspta);

  });

  $('#btn-cubo').on('click', function(){
     var aristaToNumber = parseInt(aristaCubo.value);
     var rspta = Math.pow(aristaToNumber,3) ;
     $('#rspta-cubo').empty();

     $('#rspta-cubo').append(rspta);

  });

  $('#btn-cono').on('click', function(){
     var radioToNumber = parseInt(radioCono.value);
     var alturaToNumber = parseInt(alturaCono.value);
     var rspta = (alturaToNumber*3.1416* Math.pow(radioToNumber,2))/3 ;
     $('#rspta-cono').empty();

     $('#rspta-cono').append(rspta);

  });

})();

