import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ServicioComponent } from './Components/servicio/servicio.component';
import {RouterModule} from '@angular/router';
import { FlamencoComponent } from './Components/flamenco/flamenco.component';
import { ConvenioComponent } from './Components/convenio/convenio.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { TrabajaconComponent } from './Components/trabajacon/trabajacon.component';
import { FlamencoMasterClassComponent } from './flamenco-master-class/flamenco-master-class.component';
import { FlamencoEspectaculoEscuestreComponent } from './flamenco-espectaculo-escuestre/flamenco-espectaculo-escuestre.component';
import { FlamencoKcomPercussionComponent } from './flamenco-kcom-percussion/flamenco-kcom-percussion.component';
import { FlamencoEnBlancoYNegroComponent } from './flamenco-en-blanco-y-negro/flamenco-en-blanco-y-negro.component';
import { FlamencoEscuelaComponent } from './flamenco-escuela/flamenco-escuela.component';

import { TemporadaComponent } from './Components/servicio/list_of_serv/temporada/temporada.component';
import { InfantilesComponent } from './Components/servicio/list_of_serv/infantiles/infantiles.component';
import { EspectaculosComponent } from './Components/servicio/list_of_serv/espectaculos/espectaculos.component';
import { OcioSocialComponent } from './Components/servicio/list_of_serv/ocio-social/ocio-social.component';
import { CastilloComponent } from './Components/servicio/list_of_serv/castillo/castillo.component';
import { CampComponent } from './Components/servicio/list_of_serv/camp/camp.component';
import { MusicaComponent } from './Components/servicio/list_of_serv/musica/musica.component';
import { EspectaculoFlamencoComponent } from './Components/servicio/list_of_serv/espectaculo-flamenco/espectaculo-flamenco.component';
import { SonidoComponent } from './Components/servicio/list_of_serv/sonido/sonido.component';
import { DecoracionComponent } from './Components/servicio/list_of_serv/decoracion/decoracion.component';
import { CochesDeCaballosComponent } from './Components/servicio/list_of_serv/coches-de-caballos/coches-de-caballos.component';
import { ClasesBaileComponent } from './Components/servicio/list_of_serv/clases-baile/clases-baile.component';
import { CochesComponent } from './Components/servicio/list_of_serv/coches/coches.component';
import { DespedidasComponent } from './Components/servicio/list_of_serv/despedidas/despedidas.component';
import { FotografiaComponent } from './Components/servicio/list_of_serv/fotografia/fotografia.component';
import { DisenoTarjetasComponent } from './Components/servicio/list_of_serv/diseno-tarjetas/diseno-tarjetas.component';
import { DjsComponent } from './Components/servicio/list_of_serv/djs/djs.component';
import { VideoComponent } from './Components/servicio/list_of_serv/video/video.component';
import { DecoracionGlobosComponent } from './Components/servicio/list_of_serv/decoracion-globos/decoracion-globos.component';
import { PhotocallComponent } from './Components/servicio/list_of_serv/photocall/photocall.component';
import { MesasDulcesComponent } from './Components/servicio/list_of_serv/mesas-dulces/mesas-dulces.component';
import { ButtonsCheckboxComponent } from './buttons-checkbox/buttons-checkbox.component';



const routes = [
  { path: '', component: HomePageComponent},
  { path: 'servicio', component: ServicioComponent},
  { path: 'flamenco', component: FlamencoComponent},
  { path: 'convenio', component: ConvenioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'flamenco_master_class', component: FlamencoMasterClassComponent},
  { path: 'flamenco_espectaculo_escuestre', component: FlamencoEspectaculoEscuestreComponent},
  { path: 'flamenco_kcom_percussion', component: FlamencoKcomPercussionComponent},
  { path: 'flamenco_en_blanco_y_negro', component: FlamencoEnBlancoYNegroComponent},
  { path: 'flamenco_escuela', component: FlamencoEscuelaComponent},
  { path: 'temporada', component: TemporadaComponent},
  { path: 'infantiles', component: InfantilesComponent},
  { path: 'espectaculos', component: EspectaculosComponent},
  { path: 'ocio_social', component: OcioSocialComponent},
  { path: 'castillo', component: CastilloComponent},
  { path: 'camp', component: CampComponent},
  { path: 'musica', component: MusicaComponent},
  { path: 'espuctaculo_flamenco', component: EspectaculoFlamencoComponent},
  { path: 'sonido', component: SonidoComponent},
  { path: 'decoracion', component: DecoracionComponent},
  { path: 'coches_de_caballos', component: CochesDeCaballosComponent},
  { path: 'clases_baile', component: ClasesBaileComponent},
  { path: 'coches', component: CochesComponent},
  { path: 'despedidas', component: DespedidasComponent},
  { path: 'fotografia', component: FotografiaComponent},
  { path: 'diseno_tarjetas', component: DisenoTarjetasComponent},
  { path: 'djs', component: DjsComponent},
  { path: 'video', component: VideoComponent},
  { path: 'decoracion_globos', component: DecoracionGlobosComponent},
  { path: 'photocall', component: PhotocallComponent},
  { path: 'mesas_dulces', component: MesasDulcesComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        TopNavbarComponent,
        FooterComponent,
        HomePageComponent,
        ServicioComponent,
        FlamencoComponent,
        ConvenioComponent,
        ContactoComponent,
        TrabajaconComponent,
        FlamencoMasterClassComponent,
        FlamencoEspectaculoEscuestreComponent,
        FlamencoKcomPercussionComponent,
        FlamencoEnBlancoYNegroComponent,
        FlamencoEscuelaComponent,
        TemporadaComponent,
        InfantilesComponent,
        EspectaculosComponent,
        OcioSocialComponent,
        CastilloComponent,
        CampComponent,
        MusicaComponent,
        EspectaculoFlamencoComponent,
        SonidoComponent,
        DecoracionComponent,
        CochesDeCaballosComponent,
        ClasesBaileComponent,
        CochesComponent,
        DespedidasComponent,
        FotografiaComponent,
        DisenoTarjetasComponent,
        DjsComponent,
        VideoComponent,
        DecoracionGlobosComponent,
        PhotocallComponent,
        MesasDulcesComponent,
        ButtonsCheckboxComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
