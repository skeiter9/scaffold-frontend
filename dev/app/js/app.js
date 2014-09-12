(function(angular, $, global){
 
  global.app = angular.module('app', ['ui.router']);
 
  app.config(['$stateProvider' , '$urlRouterProvider','$locationProvider',function($stateProvider , $urlRouterProvider, $locationProvider) {
      
      $urlRouterProvider 
        .rule(function ($injector, $location) {
          var path = $location.path(),
              normalized = path.toLowerCase();
          if (path !== normalized) {
            return normalized;
          }
        })
        .otherwise('/');
      
      $stateProvider 

      .state('404',{
        url:'/404',
        templateUrl:'views/404.html',
        controller: ['$scope','$rootScope', '$state',function($scope,$rootScope, $state){ 
          var vm = this; 
          $rootScope.$emit('changeTitleAppbar', '404 Error' );
          $rootScope.$emit('changeAppbar', 'default' );
          $rootScope.$emit('hideAction'); 
        }],
        controllerAs:'vm'
      })

      .state('home',{
        url:'/', 
        //templateUrl:'views/home.html',
        controller:['$scope', '$verge',function($scope, $verge){ 
          console.log($verge.viewportW() );
          if ( $verge.viewportW() <= 768 ) { //Mobile
            
          }else{
            /**background **/
            $.backstretch([ 
              "assets/images/background/pollo-a-la-parrilla.jpg",
              "assets/images/background/chuleta.jpg",
              "assets/images/background/parrilla.jpg",
              "assets/images/background/pollo-a-la-brasa.jpg"
            ], {duration: 5000, fade: 750});
          };
        }],
        controllerAs:'vm'
      })

      .state('carta',{
        abstract: true,
        url:'/carta',  
        templateUrl:'app/js/carta/index.html'
      })

      .state('carta.list',{
        url:'',
        views:{
          'list':{
            templateUrl:'app/js/carta/list.html',
            controller:['$scope',function($scope){
              console.log("list"); 
              $scope.title= 'Carta';
              $scope.carta=[
                {
                  name: 'Pollos a la brasa',
                  photo: 'pollobrasa1.jpg',
                  img:{'background-image':'url(images/portadas/standar/pollobrasa1.jpg)'} ,
                  plates: [
                    {
                      name: '1/4 Pollo a la Brasa ',
                      nameId:'1-4-pollo-a-la-brasa',

                      bg:{'background-image':'url(images/platos/square/pollo-brasa/cuarto/cuarto-pollo-a-la-brasa-1.jpg)'} ,
                      photo:'pollo-brasa/cuarto/cuarto-pollo-a-la-brasa-1.jpg',

                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 11
                    },
                    {
                      name: '1/2 Pollo a la Brasa ',
                      nameId:'1-2-pollo-a-la-brasa',
                      photo:'pollo-brasa/medio/medio-pollo-a-la-brasa-1.jpg',
                      bg:{'background-image':'url(images/platos/square/pollo-brasa/medio/medio-pollo-a-la-brasa-1.jpg)'} ,
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 20
                    },
                    {
                      name: '1 Pollo a la Brasa ',
                      nameId:'1-pollo-a-la-brasa',
                      photo:'pollo-brasa/entero/entero-pollo-a-la-brasa-1.jpg',
                      bg:{'background-image':'url(images/platos/square/pollo-brasa/entero/entero-pollo-a-la-brasa-1.jpg)'} ,
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 38
                    },
                    {
                      name: '1 Pollo a la Brasa (Delivery)',
                      nameId:'1-pollo-a-la-brasa-delivery',
                      photo:'pollo-brasa/delivery/pollo-a-la-brasa-delivery.jpg',
                      bg:{'background-image':'url(images/platos/square/pollo-brasa/delivery/pollo-a-la-brasa-delivery.jpg)'} ,
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 40
                    } 
                  ]
                },
                {
                  name: 'Pollo broaster',
                  photo: 'broaster1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/broaster1.jpg)'} ,
                    plates: [
                    {
                      name: '1/4 Pollo a la Broaster ',
                      nameId:'cuarto-pollo-broaster',
                      bg:{'background-image':'url(images/platos/square/pollo-broaster/cuarto/cuarto-pollo-broaster.jpg)'} ,
                      photo:'pollo-broaster/cuarto/cuarto-pollo-broaster.jpg',
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 12
                    },
                    {
                      name: '1/2 Pollo a la Broaster ',
                      nameId:'medio-pollo-broaster',
                      bg:{'background-image':'url(images/platos/square/pollo-broaster/medio/pollo-broaster-medio.jpg)'} ,
                      photo:'pollo-broaster/medio/pollo-broaster-medio.jpg',
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 22
                    },
                    {
                      name: '1 Pollo a la Broaster ',
                      nameId:'entero-pollo-a-la-brasa',
                      bg:{'background-image':'url(images/platos/square/pollo-broaster/entero/pollo-broaster-entero.jpg)'} ,
                      photo:'pollo-broaster/entero/pollo-broaster-entero.jpg',
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 40
                    },
                    /*
                    {
                      name: "1/4 Pollo tedhi's",
                      nameId:'cuarto-pollo-broaster',
                      bg:{'background-image':'url(images/platos/square/pollo-broaster/cuarto/pollo-braster-cuarto.png)'} ,
                      photo:'pollo-broaster/cuarto/pollo-braster-cuarto.png',
                      subname: "(filete de pollo a la parrilla)" ,
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 17
                    },
                    */
                    {
                      name: 'Alitas Broaster',
                      nameId:'alitas-broaster',
                      bg:{'background-image':'url(images/platos/square/alitas-broaster/alitas-broaster.jpg)'} ,
                      photo:'alitas-broaster/alitas-broaster.jpg',
                      description: '(Acompañado con crocantes papas fritas y ensalada clásica)',
                      price: 10
                    } 
                  ]
                },
                {
                  name: 'Carnes',
                  photo: 'res1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/res1.jpg)'}
                  ,plates: [
                    {
                      name: ' Costillas de cerdo a lo Tedhi’s ',
                      nameId:'costilla-de-cerdo',
                      //costillas-cerdo-tedhis
                      bg:{'background-image':'url(images/platos/square/costillas-cerdo-tedhis/costillas-de-cerdo-tedhis.jpg)'} ,
                      photo:'costillas-cerdo-tedhis/costillas-de-cerdo-tedhis.jpg',
                      description: '(3 deliciosas costillitas bañadas en una suave y colorida crema a la bbq, acompañadas con crocantes papas fritas y ensalada clásica)',
                      price: 17
                    },
                    {
                      name: ' Lomo Fino ',
                      nameId:'lomo-fino',
                      bg:{'background-image':'url(images/platos/square/lomo-fino/lomo-fino.jpg)'} ,
                      photo:'lomo-fino/lomo-fino.jpg',
                      description: ' (Un jugoso Lomo Fino adornado con chorizo, acompañado con crocantes papas fritas y ensalada clásica ) ',
                      price: 25
                    },
                    {
                      name: ' Lomo Fino con champiñones ',
                      nameId:'lomo-fino-con-champinones',
                      bg:{'background-image':'url(images/platos/square/lomo-fino-con-champinones/lomo-fino-con-champinones.jpg)'} ,
                      photo:'lomo-fino-con-champinones/lomo-fino-con-champinones.jpg',
                      description: ' (Un jugoso Lomo Fino con unos deliciosos y pequeños trozos de champiñones, acompañado con crocantes papas fritas y ensalada clásica) ',
                      price: 28
                    },
                    {
                      name: ' Lomo a la Visantina ',

                      description: ' (Un jugoso lomo cubierto por unas rodajas de jamón, queso y bañado en mostaza, acompañado con crocantes papas fritas y ensalada clásica) ',
                      price: 28
                    },
                    {
                      name: ' Churrasco a la parrilla ',
                      nameId:'churrasco-a-la-parrilla',
                      bg:{'background-image':'url(images/platos/square/churrasco-a-la-parrilla/churrasco-a-la-parrilla.jpg)'} ,
                      photo:'churrasco-a-la-parrilla/churrasco-a-la-parrilla.jpg',
                      description: ' (Un delicioso Churrasco recién salido de la parrilla, acompañado con crocantes papas fritas y ensalada clásica) ',
                      price: 17
                    }

                  ]
                },
                {
                  name: 'Piqueos',
                  photo: 'piqueos1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/piqueos1.jpg)'}
                  ,plates: [
                    {
                      name: ' Anticuchos de Corazón',
                      nameId:'anticucho-de-corazon',
                      bg:{'background-image':'url(images/platos/square/anticucho-de-corazon/anticucho-de-corazon.jpg)'} ,
                      photo:'anticucho-de-corazon/anticucho-de-corazon.jpg',
                      description: '(Unos deliciosos y jugosos Anticuchos, acompañados con crocantes papas fritas y ensalada clásica)',
                      price: 17
                    },{
                      name: ' Mollejitas a la parrilla ',
                      nameId:'mollejitas-a-la-parrilla',
                      bg:{'background-image':'url(images/platos/square/mollejitas-a-la-parrilla/mollejitas-a-la-parrilla.jpg)'} ,
                      photo:'mollejitas-a-la-parrilla/mollejitas-a-la-parrilla.jpg',
                      description: '(Unas deliciosas Mollejitas recién salidas de la parrilla, acompañadas con crocantes papas fritas y ensalada clásica)',
                      price: 15
                    },{
                      name: ' Brochetas de pollo ',
                      nameId:'brochetas-de-pollo',
                      bg:{'background-image':'url(images/platos/square/brochetas-de-pollo/brochetas-de-pollo.jpg)'} ,
                      photo:'brochetas-de-pollo/brochetas-de-pollo.jpg',
                      description: '(Unas Brochetas de pollo, unos coloridos trozos de pimiento y cebolla, acompañados con crocantes papas fritas y ensalada clásica)',
                      price: 17
                    },{
                      name: ' chicharron de pollo',
                      nameId:'chicharron-de-pollo',
                      bg:{'background-image':'url(images/platos/square/chicharron-de-pollo/chicharron-de-pollo.jpg)'} ,
                      photo:'chicharron-de-pollo/chicharron-de-pollo.jpg',
                      description: '(Crocantes trozos de pollo, acompañados con deliciosas papas fritas y ensalada clásica)',
                      price: 17
                    },{
                      name: ' Marucha',
                      nameId:'marucha',
                      bg:{'background-image':'url(images/platos/square/marucha/marucha.jpg)'} ,
                      photo:'marucha/marucha.jpg',
                      description: 'Un filete de carne, acompañada con crocantes papas fritas y ensalada clásica',
                      price: 17
                    },{
                      name: ' Chuleta ',
                      nameId:'chuleta',
                      bg:{'background-image':'url(images/platos/square/chuleta/chuleta.jpg)'} ,
                      photo:'chuleta/chuleta.jpg',
                      description: 'Una jugosa chuleta a la parrilla, acompañada con crocantes papas fritas y ensalada clásica',
                      price: 17
                    },{
                      name: ' Chorizo ',
                      nameId:'chorizo',
                      bg:{'background-image':'url(images/platos/square/chorizo/chorizo.jpg)'} ,
                      photo:'chorizo/chorizo.jpg',
                      description: 'Tres deliciosos chorizo a la parrilla, acompañados con crocantes papas fritas y ensalada clásica',
                      price: 15
                    },{
                      name: ' Bisteck a la parrilla ',
                      nameId:'bisteck-a-la-parrilla',
                      bg:{'background-image':'url(images/platos/square/bisteck-a-la-parrilla/bisteck-a-la-parrilla.jpg)'} ,
                      photo:'bisteck-a-la-parrilla/bisteck-a-la-parrilla.jpg',
                      description: 'Un jugoso Bisteck a la parrilla, acompañado con crocantes papas fritas y ensalada clásica',
                      price: 17
                    },{
                      name: ' Lengua de res a la parrilla ',
                      nameId:'lengua-a-la-parrilla',
                      bg:{'background-image':'url(images/platos/square/lengua-a-la-parrilla/lengua-a-la-parrilla.jpg)'} ,
                      photo:'lengua-a-la-parrilla/lengua-a-la-parrilla.jpg',
                      description: 'Una jugosa Lengua a la parrilla, acompañado con crocantes papas fritas y ensalada clásica',
                      price: 17
                    }
                  ]
                },
                {
                  name: 'Parrilla',
                  photo: 'parrilla1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/parrilla1.jpg)'}
                  ,plates: [
                    {
                      name: ' Piqueo Tedhi’s  ',
                      nameId:'piqueo-tedhis-entero',
                      bg:{'background-image':'url(images/platos/square/piqueos-tedhis/entero/piqueo-tedhis-entero.jpg)'} ,
                      photo:'piqueos-tedhis/entero/piqueo-tedhis-entero.jpg',
                      subname: '(4 personas) ',
                      description: '4 Palitos de anticuchos, 4 Palitos de brochetas, 8 Trozos de chicharron, 6 Mollejitas con papas fritas y ensalada ',
                      price: 50
                    },{
                      name: ' 1/2 Piqueo Tedhi’s   ',
                      nameId:'piqueo-tedhis-medio',
                      bg:{'background-image':'url(images/platos/square/piqueos-tedhis/medio/piqueo-tedhis-medio.jpg)'} ,
                      photo:'piqueos-tedhis/medio/piqueo-tedhis-medio.jpg',
                      subname: '(2 personas) ',
                      description: ' 2 Palitos de anticuchos, 2 Palitos de brochetas, 4 Trozos de chicharron,4 Mollejitas con papas fritas y ensalada  ',
                      price: 27
                    },
                    {
                      name: ' Parrilla Mixta   ',
                      nameId:'parilla-mixta',
                      bg:{'background-image':'url(images/platos/square/parilla-mixta/parilla-mixta.jpg)'} ,
                      photo:'parilla-mixta/parilla-mixta.jpg',
                      subname: '(4 personas) ',
                      description: ' Marucha, Chorizo, Filete de Pollo, Chuletas con papas fritas y ensalada  ',
                      price: 50
                    },
                    {
                      name: ' Parrillada Tedhi’s   ',
                      nameId:'parrilla-tedhis',
                      bg:{'background-image':'url(images/platos/square/parrilla-tedhis/parrilla-tedhis.jpg)'} ,
                      photo:'parrilla-tedhis/parrilla-tedhis.jpg',
                      subname: '(6 personas) ',
                      description: ' Lomo Fino, Filete de Pollo, 3 Costillas de cerdo, 3 Lenguas, Chorizos, 3 Palitos de corazón con papas fritas y ensalada  ',
                      price: 80
                    },
                  ]
                },
                {
                  name: 'Ensaladas',
                  photo: 'ensalada1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/ensalada1.jpg)'}
                  ,plates: [
                    {
                      name: ' Ensalada Clásica  ',
                      nameId:'ensalada-clasica',
                      bg:{'background-image':'url(images/platos/square/ensaladas/clasica/ensalada-clasica.jpg)'} ,
                      photo:'ensaladas/clasica/ensalada-clasica.jpg',
                      description: 'lechuga, tomate, pepinillo, zanahoria, beterraga y Brócoli (palta) ',
                      price: 4
                    },{
                      name: ' Ensalada Cocida  ',
                      nameId:'ensalada-cocida',
                      bg:{'background-image':'url(images/platos/square/ensaladas/cocida/ensalada-cocida.jpg)'} ,
                      photo:'ensaladas/cocida/ensalada-cocida.jpg',
                      description: 'beterraga, zanahoria, vainita,  brócoli y choclo  ',
                      price: 4
                    },{
                      name: ' Esalada Tedhi’s   ',
                      nameId:'ensalada-tedhis',
                      bg:{'background-image':'url(images/platos/square/ensaladas/tedhis/ensalada-tedhis.jpg)'} ,
                      photo:'ensaladas/tedhis/ensalada-tedhis.jpg',
                      subname: 'Nuevo',
                      description: ' lechuga, tomate, pepinillo, beterraga, champiñones, brócoli, choclo y palta  ',
                      price: 6
                    }
                  ]
                },
                {
                  name: 'Sandwich',
                  photo: 'ensalada1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/sandwich1.jpg)'}
                  ,plates: [
                    {
                      name: ' Sandwich de pollo ',
                      nameId:'sandwiche-de-pollo',
                      bg:{'background-image':'url(images/platos/square/sandwich-de-pollo/sandwiche-de-pollo.jpg)'} ,
                      photo:'sandwich-de-pollo/sandwiche-de-pollo.jpg',
                      description: 'Pollo bañado con mayonesa, lechuga y unas rodajas de tomate, acompañados con crocantes papas fritas ,',
                      price: 4
                    },{
                      name: ' Hamburguesa ',
                      nameId:'hamburguesa-simple',
                      bg:{'background-image':'url(images/platos/square/hamburguesa/simple/hamburguesa-simple.jpg)'} ,
                      photo:'hamburguesa/simple/hamburguesa-simple.jpg',
                      description: 'Deliciosa hamburguesa de carne, lechuga y unas rodajas de tomate, acompañados con crocantes papas fritas',
                      price: 4
                    },{
                      name: ' Hamburguesa Royal ',
                      nameId:'hamburguesa-roryal',
                      bg:{'background-image':'url(images/platos/square/hamburguesa/royal/hamburguesa-roryal.jpg)'} ,
                      photo:'hamburguesa/royal/hamburguesa-roryal.jpg',
                      description: 'Una jugosa hamburguesa de carne, con huevo frito y queso edam, lechuga, unas rodajas de tomate, acompañada con crocantes papas fritas',
                      price: 7
                    }
                  ]
                },
                {
                  name: 'Jugos',
                  photo: 'jugos1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/jugos1.jpg)'}
                  ,plates: [
                    {
                      name: ' Jugos',
                      subname:'(Piña, Papaya, Surtido, Naranja)',
                      price: 4
                    },
                    {
                      name: ' Especial con leche ', 
                      price: 7
                    },
                    {
                      name: ' Especial con Malta  ', 
                      subname: '(1/2 jarra)',
                      price: 10
                    },
                    {
                      name: ' Milshake  ', 
                      price: 10
                    }
                  ]
                },
                {
                  name: 'Helados',
                  photo: 'helados1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/helados1.jpg)'}
                  ,plates: [
                    {
                      name: ' Copa Simple',
                      description: '2 Bolas',
                      price: 3
                    },
                    {
                      name: ' Copa campero',
                      description: '3 Bolas',
                      price: 7
                    }
                  ]
                },
                {
                  name: 'Bebidas Frias',
                  photo: 'bebidas-frias1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/bebidas-frias1.jpg)'}
                  ,plates: [
                    {
                      name: 'Chicha Morada ',
                      subname: '(Jarra)',
                      description: '',
                      price: 7
                    },{
                      name: 'Gaseosa mediana',
                      description: '',
                      price: 1.5
                    },{
                      name: 'Gaseosa de 1/2',
                      description: '',
                      price: 2
                    },{
                      name: 'Gaseosa de 1 1/2',
                      description: '',
                      price: 7
                    },{
                      name: 'Gaseosa de 2 Lts.',
                      description: '',
                      price: 8
                    },{
                      name: 'Gaseosa de 3 Lts.',
                      description: '',
                      price: 10
                    },{
                      name: 'Limonada frozen',
                      description: '',
                      price: 10
                    },
                  ]
                },
                {
                  name: 'Bebidas Calientes',
                  photo: 'bebidas-calientes1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/bebidas-calientes1.jpg)'}
                  ,plates: [
                    {
                      name: ' Taza de café con Leche ', 
                      price: 2.5
                    },
                    {
                      name: ' Taza de café ', 
                      price: 2.0
                    },
                    {
                      name: ' Infusiones (Taza) ', 
                      price: 2.0
                    }
                  ]
                },
                {
                  name: 'Cocktails',
                  photo: 'cocktails1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/cocktails1.jpg)'}
                  ,plates: [
                    {
                      name: ' Pisco Sour ', 
                      price: 7
                    },{
                      name: ' Cocktail Algarrobina ', 
                      price: 7
                    },{
                      name: ' Menta Frappé ', 
                      price: 7
                    },{
                      name: ' Chilcano de Pisco ', 
                      price: 7
                    },{
                      name: ' Gin con Gin ', 
                      price: 7
                    },{
                      name: ' Belliny ', 
                      price: 7
                    },{
                      name: ' Perú Libre ', 
                      price: 7
                    },{
                      name: ' Piña Colada ', 
                      price: 7
                    },{
                      name: ' Sangria (Jarra)', 
                      price: 20
                    },{
                      name: '1/2 Sangria (Jarra) ', 
                      price: 10
                    }
 
                  ]
                },
                {
                  name: 'Licores en Botella',
                  photo: 'licors1.jpg' ,
                  img:{'background-image':'url(images/portadas/standar/licors1.jpg)'}
                  ,plates: [
                    {
                      name: ' Cerveza Jarra 1.200 Lt. ', 
                      price: 10
                    },{
                      name: ' Malta polar chica  ', 
                      price: 5
                    },{
                      name: ' Cerveza Cristal chica  ', 
                      price: 5
                    },{
                      name: ' Vino Tacama botella  ', 
                      price: 30
                    },{
                      name: ' Vino Blanco Viña Vieja 750 ml.  ', 
                      price: 25
                    },{
                      name: ' Vino Tinto Viña Vieja 750 ml.  ', 
                      price: 25
                    },{
                      name: 'Vino Borgoña Copello 750 ml.  ', 
                      price: 22
                    },{
                      name: ' Vino Borgoña Viña Vieja  ', 
                      price: 25
                    },{
                      name: ' Vino Tacama Rose ', 
                      price: 30
                    },{
                      name: 'Vino Viña Vieja Rose ', 
                      price: 25
                    },{
                      name: 'Vino Concha y Toro (Casillero del Diablo)  ', 
                      price: 38
                    },{
                      name: ' Vino Ocucaje FON DE CAVE  ', 
                      price: 30
                    },{
                      name: ' Vino Viña Vieja copa ', 
                      price: 6
                    }
                  ]
                }
              ];

            }]
          }
        }
      })
      
      .state('carta.show',{
        url:'/{id:[a-zA-Z]{1,25}}',
        views:{
          'item':{
            templateUrl:'app/js/carta/list.html',
            controller:['$scope',function($scope){
              console.log("list"); 
              $scope.title= 'Carta'; 
            }]
          }
        }
      })


      .state('promociones',{
        url:'/promociones', 
        templateUrl:'app/js/promociones/index.html',
        controller:['$scope',function($scope){ 
        	console.log('carta');
        }],
        controllerAs:'vm'
      })
      .state('ubicacion',{
        url:'/ubicacion', 
        templateUrl:'app/js/ubicacion/index.html',
        controller:['$scope',function($scope){ 
          var myLatlng = new google.maps.LatLng(-6.770498, -79.839088);
          var mapOptions = {
            zoom: 18,
            center: myLatlng
          }
          var map = new google.maps.Map(document.getElementById('map'), mapOptions);

          var marker = new google.maps.Marker({
              position: myLatlng,
              icon:'images/icon-map.png',
              map: map,
              title: 'Eras Hotel'
          });
          marker.setMap(map);
        }],
        controllerAs:'vm'
      })
      .state('nosotros',{
        url:'/nosotros', 
        templateUrl:'app/js/nosotros/index.html',
        controller:['$scope',function($scope){ 
        	var slider = new IdealImageSlider.Slider({
            selector: '#slider',
            effect: 'fade'
          });
          slider.start();
        }],
        controllerAs:'vm'
      })

      .state('contactanos',{
        url:'/contactanos', 
        templateUrl:'app/js/contactanos/index.html',
        controller:['$scope',function($scope){ 
          console.log('contactanos');
        }],
        controllerAs:'vm'
      })
      .state('local',{
        url:'/local', 
        templateUrl:'app/js/local/index.html',
        controller:['$scope',function($scope){ 
          
        }],
        controllerAs:'vm'
      })
      .state('eventos',{
        url:'/eventos', 
        templateUrl:'app/js/eventos/index.html',
        controller:['$scope',function($scope){  
          
        }],
        controllerAs:'vm'
      })

  }]);

  app.directive('content', ['$verge', function($verge){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, element, iAttrs) {
         if( element[0].clientHeight <= $verge.viewportH()){
          console.log($verge);
          element.css('height', $verge.viewportH() );
        }
      }
    };
  }]);

  app.directive('plate', ['$verge', function($verge){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, element, attrs) {
        var img = element.find('img').eq(0);
        console.log(img.attr('ng-src') );
      }
    };
  }]);

})(angular,jQuery,  window);