$o = $('.oval');

var data = [
  {
    logo: "img/l1.png",
    text1: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetros independiente al operativo, ya que está enfocado a los departamentos de mercadeo y recepción (Jefe de Recepción).",
    title: "COMPRAS",
    text2: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u",
    img: "img/compras.png",
    fondo: "img/f1.png",
    items: [
      {img: "img/img1.png",title: "Inventarios", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
      {img: "img/img1.png",title: "Ordenes de Compra", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
      {img: "img/img1.png",title: "Previsión de Compras", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
    ]
  },
  {
    logo: "img/l2.png",
    text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "FRONT DESK",
    text2: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u",
    img: "img/compras.png",
    fondo: "img/f2.png",
    items: [
      {img: "img/img1.png",title: "Inventarios", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
      {img: "img/img1.png",title: "Ordenes de Compra", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
      {img: "img/img1.png",title: "Previsión de Compras", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
    ]
  },
  {
    logo: "img/l3.png",
    text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "COMUNICATION",
    text2: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u",
    img: "img/compras.png",
    fondo: "img/f3.png",
    items: [
      {img: "img/img1.png",title: "Inventarios", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
      {img: "img/img1.png",title: "Ordenes de Compra", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
      {img: "img/img1.png",title: "Previsión de Compras", text: "Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de u"},
    ]
  }
];

$o.hover( function(e){
  e.preventDefault();
  var id = (parseInt(this.dataset.id));
  $('.efecto').addClass('animated bounceIn');
  $("#logo").attr("src", data[id].logo);
  setTimeout(function(){ $('.efecto').removeClass("animated bounceIn"); }, 300);//Actualiza la animación
  $(".text-seven").text(data[id].text1);
  $(".compras").text(data[id].title);
  $(".compras-text").text(data[id].text2);
  $('#compras').attr("src", data[id].img);
  $(".it").each(function(ind){
  $(".f1").css("background-image", `url( ${data[id].fondo})`);
    $(this).children().each(function(index){
      if(index==0)
        $(this).attr("src", data[id].items[ind].img);
      else if (index==1)
        $(this).text(data[id].items[ind].title);
      else
        $(this).text(data[id].items[ind].text);
    });
  });
});

/*SECTION 2 *************************/
var data2 = [
  {
   title: 'FRONT DESK',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'DECISIONES SUPPORT SYSTEM',
   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   subTitle: 'Algunas Funciones',
   functions: ['coki1','coki2','coki3'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/l2.png'
 },{
   title: 'COMUNICATION',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'ACCOUTING',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'TOUR OPERATION',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'POINT OF SALES BILLING',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'PAYROLL',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'MULTIPROPERTY',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'FIXED ASSET',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'MANAGMENT',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'ONLINE RESERVATION',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 },{
   title: 'MAIL SERVICE',
   content: 'Front Desk, con sus más de 160 opciones entre operativas, configuración y reportes, es a nivel de hoteles el más importante entre los módulos. Una vez configurado el Front Parámetros, este módulo nos permite de una forma muy eficiente controlar las operaciones diarias con reportes muy útiles y facilidad de manipulación de grandes cantidades de información. Front Desk contiene el modulo de Front Parámetro.',
   subTitle: 'Algunas Funciones',
   functions: ['Operaciones sobre Habitaciones','Operaciones sobre Follos','Reservas'],
   button: 'SOLICITA MAS INFORMACIÓN',
   url: 'img/img1.png'
 }
];

$li = $('li');
$a = $('.a');

$a.hover( function(e){
  e.preventDefault();
  $li.removeClass('current');
  $(this).parent().addClass('current');
  var id = ( parseInt(this.dataset.id));
  $('.content-title').text(data2[id].title);
  $('.content-body').text(data2[id].content);
  $('.content-sub-title').text(data2[id].subTitle);
  var li = data2[id].functions.map( e => `<li class="function">${e}</li>`);
  $('#img').addClass('animated fadeInRight').attr("src", data2[id].url);
  setTimeout(function(){ $('#img').removeClass("animated fadeInRight"); }, 300);//Actualiza la animación
  $("#function").html(li);
});
