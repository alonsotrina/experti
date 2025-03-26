/// PROPIEDADES PARA EL EFECTO ACORDEON
// VARIABLES
var propAcordeon = {
  acc: document.querySelectorAll('.acordeon__title'),
  colorIndex: 0,
  submenuItems: document.querySelectorAll('.accordion__box')
}

// METODOS
var metAcordeon = {
  // FUION PRICIPAL
  inicio: function () {
     //  ciclo  para recorrer los enlaces
    for (var i = 0; i < propAcordeon.acc.length; i++) {
      propAcordeon.acc[i].addEventListener('mouseover', metAcordeon.efecto);
    }
  },
  efecto: function () {
     //  ciclo  para recorrer dejar en 0px la altura de los contenedores 
    for (var i = 0; i < propAcordeon.submenuItems.length; i++) {
      propAcordeon.submenuItems[i].style.height = 0 + 'px';
    }

    // variables locales para obetener 
    // nextElementSibling se usa para devolver el siguiente elemento inmediato del elemento especificado 
    var submenu = this.nextElementSibling;
    // Element.clientHeight devuelve la altura de un elemento en píxele
    submenuHeight = this.nextElementSibling.clientHeight;
    var height = submenu.querySelector('.accordion__box div').clientHeight;
    // condificonal para deteminar la altura en "px" del contendor
    if (submenuHeight == 0) {
      submenu.style.height = height + 'px';
      this.classList.add('accordion__active');
    } else {
      submenu.style.height = 0 + 'px';
      this.classList.remove('accordion__active');
    }
  }
}
// SE EJECUTA LA FUNCÍÓN
metAcordeon.inicio();


////*********************************************************************************************************************////



/// PROPIEDADES PARA EL EFECTO TABS
// VARIABLES 
var propTabs = {
  primerEncabezado: document.getElementById('link').firstElementChild,
  primerContenido: document.getElementById('contenido_bg').firstElementChild,
  enlacesEncabezado: document.querySelectorAll('#link a'),
  li_encabezado: document.querySelectorAll('#link h2'),
  divs_contenido: document.querySelectorAll('#contenido_bg > div'),
  contenido_activo: null
}
// METODOS
var metTabs = {
  // Funcion principal
  inicio2: function () {
    // estilo para dejar activo el primer contenido
    propTabs.primerContenido.className = "active";
    //  ciclo  para recorrer los enlaces
    for (i = 0; i < propTabs.enlacesEncabezado.length; i++) {
      propTabs.enlacesEncabezado[i].addEventListener('mouseover', metTabs.evento);
    }

  },
  evento: function (e) {
    e.preventDefault();
    //  ciclo  para eliminar la clase activa de los enlaces principales
    for (i = 0; i < propTabs.li_encabezado.length; i++) {
      propTabs.li_encabezado[i].className = '';
    }
    //  ciclo  para eliminar la clase activa de los contenidos
    for (i = 0; i < propTabs.divs_contenido.length; i++) {
      propTabs.divs_contenido[i].className = '';
    }
    // agregar la clase active al elemento padre "<li>"
    this.parentElement.className = ' active'
     // obteneido el id del elemento al hacer click
    propTabs.contenido_activo = this.getAttribute('href');
    document.querySelector(propTabs.contenido_activo).className = 'active';
     // variable para dar estilo
    document.querySelector(propTabs.contenido_activo).style.opacity = 0.1;
    setTimeout(function () {
      document.querySelector(propTabs.contenido_activo).style.opacity = 1;
    }, 700);
  }

}
// SE EJECUTA LA FUNCÍÓN
metTabs.inicio2();