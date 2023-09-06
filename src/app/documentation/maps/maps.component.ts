import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MapService } from '../../core/services/map/map.service';

@Component({
  selector: 'cca-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent {
  myPos: google.maps.LatLng = new google.maps.LatLng(
    43.2972322,
    5.369667499999999
  );

  /**
   * Le marqueur de ma position courante sur la map
   */
  myPosMarker!: google.maps.Marker;

  /**
   * Liste des autres marqueurs d'entreprise sur la map
   */
  MarkerArray: Array<google.maps.Marker> = [];

  /**
   * Permettra de générer la liste des lieux en france
   */
  autocomplete!: google.maps.places.Autocomplete;

  /**
   * @ignone
   */
  centered = { lat: 50.064192, lng: -130.605469 };

  /**
   * @ignone
   */
  defaultBounds = {
    north: this.centered.lat + 0.1,
    south: this.centered.lat - 0.1,
    east: this.centered.lng + 0.1,
    west: this.centered.lng - 0.1,
  };

  /**
   * Variable à exmploiter dans le html pour gérer l'affichage du tableau
   */

  /**
   * Base de l'icone verte pour afficher ma position {@link myPosMarker}
   */
  iconUrl =
    'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';

  /**
   * Toutes les lieux initiaux
   *
   */
  Places: Element[] = [];

  /**
   * Liste des lieux apprès application des filtres {@link TriDistance}
   */
  PlacesFiltrer: Array<Place> = [];
  // Pour calculer la route et les distances

  /**
   * Formulaire de choix des modes de déplacement
   */
  distanceForm = this.fb.group({
    travelMode: 'WALKING',
  });

  /**
   *
   * Format des colonnes de dataTable
   */
  columns = [
    { flexGrow: 2, prop: 'Entreprise', name: 'Entreprise' },
    {
      flexGrow: 2,
      name: 'Adresse',
      sortable: false,
      prop: 'destinationAddresses',
    },
    { flexGrow: 2, prop: 'libelleCodeNaf', name: "Secteur d'activité" },
    { flexGrow: 2, name: 'Site web', sortable: false, prop: 'siteInternet' },
    { flexGrow: 1, prop: 'nombreEmployes', name: 'Employés' },
  ];

  /**
   * Position courrante sur laquelle on a cliqué
   */
  directionsCurrentPosition: any;

  /**
   * Service de calcule de la route/direction
   */
  directionsService = new google.maps.DirectionsService();

  /**
   * Variable d'affichage de la direction sur la map
   */
  directionsRenderer = new google.maps.DirectionsRenderer();

  /**
   * Notre carte map
   */
  map!: google.maps.Map;

  /**
   * Les options du marqueur
   */
  markerOptions!: google.maps.MarkerOptions;

  /**
   *
   * @param fb Le form builder
   *
   * Notre constructeur
   */
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public exec: MapService
  ) {
    _activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      if (params.member) {
        _router.navigateByUrl('/');
      }
    });
  }

  /**
   * Récupère l'utilisateur connecté
   */

  /**
   *@param {google.maps.LatLng} end le point sur lequel on aura cliqué (B)
   * Calcule et indique la route entre la situation actuelle et le point sur lequel
   * on aura cliqué
   */
  // calcRoute(end?: google.maps.LatLng) {
  //   let start: any = this.myPos; // {lat:this.lat, lng: this.lng};
  //   this.directionsCurrentPosition = end;
  //   let request: any = {
  //     origin: start,
  //     destination: end,
  //     travelMode: this.distanceForm.value.travelMode, //||'DRIVING'||'BICYCLING'||'TRANSIT'||'WALKING',
  //     drivingOptions: {
  //       departureTime: new Date(/* now, or future date */),
  //       trafficModel: 'pessimistic',
  //     },
  //   };
  //   this.directionsRenderer.setMap(this.map);

  //   this.directionsService.route(request, (result, status) => {
  //     if (status == 'OK') {
  //       this.directionsRenderer.setDirections(result);
  //     }
  //   });
  // }

  /**
   * @param {number} even l'indice de la tab sur laquel on a cliqué
   * Capture le clique sur un élément Tab(Map ou List) pour changer l'affichage des points
   */
  changeTab(event: number) {
    setTimeout(() => {
      this.loadMap();
      this.MarkerArray.forEach((element) => {
        // Enlever d'abord les markers sur la map avant de positionner les nouveaux
        element.setMap(null);
      });
      // this.calcRoute(this.directionsCurrentPosition);
      let mode = this.distanceForm.value.travelMode;
      let zoom = mode == 'WALKING' ? 13.1 : mode == 'BICYCLING' ? 11.5 : 10.7;
      if (this.map) {
        this.map.setZoom(zoom);
      }
      this.PlacesFiltrer.forEach((element) => {
        this.addMarkerSurMap(element);
      });
    }, 50);
  }

  /**
   * permet de découper les données en bloc de 25 éléments et d'envoyer à get distance.
   * on découpe les données ainsi car la Place de Map reçois un array de 25points max et retourne les distances entre
   * ces 25 points et le point initial
   *
   * on se sert ensuite de {@link getDistance} pour calculer la distance
   */

  TriDistance() {
    // let mode = this.distanceForm.value.travelMode;
    // let zoom = mode == 'WALKING' ? 13.1 : mode == 'BICYCLING' ? 11.5 : 10.7;
    // if (this.map) {
    //   this.map.setZoom(zoom);
    // }
    // this.MarkerArray.forEach((element) => {
    //   // Enlever d'abord les markers sur la map avant de positionner les nouveaux
    //   element.setMap(null);
    // });
    // this.directionsRenderer.setMap(null);
    // let Destinations: any[] = [];
    // let Places: Place[] = [];
    // this.PlacesFiltrer = [];
    // let Tables: any[] = [];
    // this.Places.forEach((element: Element, key) => {
    //   if (element.coordinates) {
    //     // Create a new Place object with the required properties
    //     const place: Place = {
    //       Adresse: element.Adresse,
    //       Entreprise: element.Entreprise,
    //       coordinates: element.coordinates,
    //       siren: element.siren,
    //       codeNaf: element.codeNaf,
    //       libelleCodeNaf: element.libelleCodeNaf,
    //       siteInternet: element.siteInternet,
    //       can: element.can,
    //       nombreEmployes: element.nombreEmployes,
    //       originAddresses: '', // Initialize or set as needed
    //       destinationAddresses: '', // Initialize or set as needed
    //       status: '', // Initialize or set as needed
    //     };
    //     place.position = new google.maps.LatLng(
    //       element.coordinates[0],
    //       element.coordinates[1]
    //     );
    //     place.label = element.Entreprise;
    //     place.title = element.Entreprise;
    //     Destinations.push(place.position);
    //     Places.push(place);
    //     if (
    //       Destinations.length % 25 == 0 ||
    //       (Destinations.length % 25 != 0 && key + 1 == this.Places.length)
    //     ) {
    //       // On ne peut appeler que 25 en distance map d'un coup
    //       Tables.push({ Destinations, Places });
    //       Destinations = [];
    //       Places = [];
    //     }
    //   }
    // });
    // Tables.forEach((element) => {
    //   this.getDistance(
    //     element.Destinations,
    //     element.Places,
    //     this.distanceForm.value.travelMode
    //   );
    // });
  }

  /**
   * @param {any} Destinations liste des destination
   * @param {any} Places liste des places
   * @param {any} travelMode mode de déplcament
   * Permet de calculer la distance entre les destinations et ma position indiquée
   * Permet de trier en fonction du mode de déplacement choisit et à 30minutes
   * Appelle la fonction addMarkerSurMap pour ajouter ces points sur la map
   * Ajoute le point en question dans {@link PlacesFiltrer} pour exmploitation future(List);
   *
   */
  getDistance(Destinations: any, Places: any, travelMode: any) {
    // let service = new google.maps.DistanceMatrixService();

    // service.getDistanceMatrix(
    //   {
    //     origins: [this.myPos],
    //     destinations: Destinations,
    //     travelMode,
    //     unitSystem: google.maps.UnitSystem.METRIC,
    //     avoidHighways: false,
    //     avoidTolls: false,
    //   },
    //   (response: any) => {
    //     response.rows.forEach((valeur: any, cle: any) => {
    //       Places[cle].distance = valeur.elements[0].distance;
    //       Places[cle].duration = valeur.elements[0].duration;
    //       Places[cle].status = valeur.elements[0].status;
    //       Places[cle].originAddresses = response.originAddresses[0];
    //       Places[cle].destinationAddresses = response.destinationAddresses[cle];
    //       if (response.rows[cle].elements[0].duration.value <= 1800) {
    //         this.PlacesFiltrer.push(Places[cle]);
    //         this.PlacesFiltrer = [...this.PlacesFiltrer];
    //         this.addMarkerSurMap(Places[cle]);
    //       }
    //     });
    //   }
    // );
  }

  infowindow!: google.maps.InfoWindow;

  /**
   * @param {any} element la position à ajouter sur la map
   *
   * Permet d'ajouter un marqueur sur la map ainsi que les anctions liées
   *
   */
  addMarkerSurMap(element: Place) {
    const marker = new google.maps.Marker({
      position: element.position,
      draggable: false,
      crossOnDrag: null,
      // label: element.label,
      map: this.map,
      title: element.title,
      icon: element.icon,
    });
    this.MarkerArray.push(marker);
    let travelMode = '';
    // 'DRIVING'||'BICYCLING'
    switch (this.distanceForm.value.travelMode) {
      case 'WALKING':
        travelMode = ' à pieds';
        break;
      case 'DRIVING':
        travelMode = ' en voiture';
        break;
      case 'BICYCLING':
        travelMode = ' à vélo';
        break;
      default:
        travelMode = ' à pieds';
        break;
    }
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h5 id="firstHeading" class="firstHeading">' +
      element.Entreprise +
      '</h5>' +
      '<div id="bodyContent">' +
      '<p><strong>' +
      element.destinationAddresses +
      '</strong></p>' +
      '<p>A ' +
      element.duration?.text +
      travelMode +
      '</p>' +
      '<p>' +
      element.libelleCodeNaf +
      (element.siteInternet
        ? '</p>' +
        '<p>Site web: <a href="' +
        element.siteInternet +
        '">' +
        element.siteInternet +
        '</p>'
        : '') +
      '</div>' +
      '</div>';

    marker.addListener('mouseover', () =>
      this.showInfo(marker, contentString, element.position)
    );

    marker.addListener('click', async () => {
      /* infowindow.open();
      infowindow.focus(); */
      // this.calcRoute(element.position);
    });
  }

  showInfo(marker: any, contentString: any, position: any) {
    this.infowindow.setContent(contentString);
    this.infowindow.setPosition(position);
    this.infowindow.open({
      map: this.map,
      anchor: marker,
    });
  }

  /**
   *Initialisation de la page
   */
  ngOnInit(): void {
    // this.exec.getDatas().subscribe((datas: any) => {
    //   this.Places = datas as Array<Place>;
    //   setTimeout(() => {
    //     this.TriDistance();
    //   }, 200);
    // });
  }

  /**
   * Ce qui se passe quand la vue est complètement chargée
   */
  ngAfterViewInit() {
    this.loadMap();
    this.infowindow = new google.maps.InfoWindow();
    let input = document.getElementById('myInput') as HTMLInputElement;
    let options = {
      bounds: this.defaultBounds,
      componentRestrictions: { country: 'fr' },
      fields: ['address_components', 'geometry', 'icon', 'name'],
      strictBounds: false,
    };

    // this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  /**
   * Initialise ou rinitialise la map
   */
  loadMap() {
    let mapStyleOption = [
      {
        featureType: 'poi.attraction',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.government',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.medical',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.school',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ];
    let mode = this.distanceForm.value.travelMode;
    let zoom = mode == 'WALKING' ? 13.1 : mode == 'BICYCLING' ? 11.5 : 10.7;
    let mapOptions: google.maps.MapOptions = {
      zoom,
      center: this.myPos,
      styles: mapStyleOption,
    };
    let elt: any = document.getElementById('map');
    this.map = new google.maps.Map(elt, mapOptions);
    this.map.addListener('click', () => {
      if (this.infowindow) {
        this.infowindow.close();
      }
    });
    this.myPosMarker = new google.maps.Marker({
      position: this.myPos,
      label: 'Vous êtes ici',
      map: this.map,
      icon: this.iconUrl + 'Map-Marker-Push-Pin-1-Left-Chartreuse-icon.png',
    });
  }

  /**
   * Intervient lorqu'on a choisit une position dans la liste des positions Map et qu'on valide comme position actuelle
   * Relance le tri en fonction de cette nouvelle position et recalcule la route entre ce point et le point récement cliqué si tel était le cas
   */
  marquerCommePositionActuelle(): void {
    this.myPos =
      this.autocomplete.getPlace()?.geometry?.location ||
      new google.maps.LatLng(0, 0);
    this.map.setCenter(this.myPos);
    this.myPosMarker.setPosition(this.myPos);
    // this.TriDistance();
    // this.calcRoute(this.directionsCurrentPosition);
  }

  /**
   * Intervient lorqu'on a clique sur prendre ma position actuelle. On recupère les coordonnées du user encours et utilise comme position actuelle
   * Relance le tri en fonction de cette nouvelle position et recalcule la route entre ce point et le point récement cliqué si tel était le cas
   */
  meGeolocaliser() {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        this.myPos = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        this.map.setCenter(this.myPos);
        this.myPosMarker.setPosition(this.myPos);
        // this.TriDistance();

        // this.calcRoute(this.directionsCurrentPosition);
      }
    );
  }

  @ViewChild('tabGroup') tabGroup: any;
  /**
   * Fonction de la modale avec le formulaire
   */
}

/**
 * @ignore
 * Interface du resultat de calcule de la distance
 */
export interface Distance {
  rows: [{ elements: [{ distance: { text: string; value: number } }] }];
  originAddresses: Array<String>;
  destinationAddresses: Array<String>;
}

/**
 * @ignore
 * Interface de Pace  par défaut
 */

export interface Element {
  Adresse?: string;
  Entreprise?: string;
  coordinates?: Array<number>;
  siren: number;
  codeNaf: string;
  libelleCodeNaf: string;
  siteInternet: string;
  can: number;
  nombreEmployes: number;
  originAddresses?: any;
  destinationAddresses?: any;
  status?: string;
}

/**
 * @ignore
 * Interface de structuration d'un point
 */
export interface Place {
  Adresse?: string;
  Entreprise?: string;
  coordinates?: Array<number>;
  siren: number;
  codeNaf: string;
  libelleCodeNaf: string;
  siteInternet: string;
  can: number;
  nombreEmployes: number;
  originAddresses: any;
  destinationAddresses: any;
  label?: string;
  title?: string;
  icon?: string;
  distance?: { text: string; value: number };
  duration?: { text: string; value: number };
  status: string;
  position?: google.maps.LatLng;
}
