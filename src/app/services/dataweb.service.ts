import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Template } from '../models/items';
//import { AngularFire, Firebase } from 'angularfire2';

@Injectable()
export class DatawebService {

  /*Datos del Json interno para la web*/
  dataw:any = {};
  cargada:boolean  = false;

  /**REgistros que extrae de Firestore  */
  templatesCollection: AngularFirestoreCollection<Template>;
  templates: Observable<Template[]>;

  constructor( 
    /**Json Local */
    public http:Http,
    /**Datos de Firestore */
    public afs: AngularFirestore
  ) { 
    /*carga dato json*/
    this.carga_data();

    //this.templates = this.afs.collection('templates').valueChanges();

  }

  /**MOdelo de  */
  getEstablecidas(){
    /**MOdelo 1, Jalal todos los campos */
    // this.templatesCollection = this.afs.collection<Template>('templates');
    // this.templates = this.templatesCollection.valueChanges();


    /**MOdelo Jala con una condicional */
    // this.templatesCollection = this.afs.collection<Template>('templates', ref => {
    //   return ref
    //             .where('categoria', '==', 'Establecidas-Esika')      
    // });
    // this.templates = this.templatesCollection.valueChanges();
  
    return this,this.templates


  }

  getNuevasEsika( sc: string){
    /**Carga datos de Direstore con consultas */
    this.templatesCollection = this.afs.collection<Template>('templates', ref => {
      return ref
                .where('tipo', '==', sc)
                .where('categoria', '==' , 'Nuevas-Esika')   
    });
    this.templates = this.templatesCollection.valueChanges();
    



    return this,this.templates


    //this.templates = this.afs.collection('templates').valueChanges();
  }


  getEstablecidasEsika( sc: string){
    /**Carga datos de Direstore con consultas */
    this.templatesCollection = this.afs.collection<Template>('templates', ref => {
      return ref
                .where('tipo', '==', sc)
                .where('categoria', '==' , 'Establecidas-Esika')   
    });
    this.templates = this.templatesCollection.valueChanges();
    



    return this,this.templates


    //this.templates = this.afs.collection('templates').valueChanges();
  }

  getGestion(){
    this.templatesCollection = this.afs.collection<Template>('templates', ref => {
      return ref
                .where('tipo', '==', 'gestion')      
    });
    this.templates = this.templatesCollection.valueChanges();

    return this,this.templates
  }


  getRecordatorios(){
    this.templatesCollection = this.afs.collection<Template>('templates', ref => {
      return ref
                .where('tipo', '==', 'recordatorio')      
    });
    this.templates = this.templatesCollection.valueChanges();

    return this,this.templates
  }


  getLanzytops(){
    this.templatesCollection = this.afs.collection<Template>('templates', ref => {
      return ref
                .where('tipo', '==', 'lanzytop')      
    });
    this.templates = this.templatesCollection.valueChanges();

    return this,this.templates
  }




  public carga_data(){
    this.http.get("./assets/data/data.web.json")
    .subscribe( data => {
      //console.log(data.json());
      this.cargada = true;
      this.dataw = data.json();
    })
  }



  // Modelo de consultas
  // getContactosFiltros(filtro: string){ 
  //   this.templatesCollection = this.afs.collection<Template>('templates', ref => {
  //     return ref
  //               .where('tipo', '==', 'Felicitaciones')      
  //   }) as AngularFirestoreCollection<Template>;
   
  //   return this.templates;
  // }
}

// export class AppComponent {
//   itemCollection: AngularFirestoreCollection<Item>;
//   items: Observable<Item[]>
//   constructor(private afs: AngularFirestore) {
//     this.itemCollection = this.afs.collection<Item>('items', ref => {
//       // Compose a query using multiple .where() methods
//       return ref
//               .where('size', '==', 'large')
//               .where('brand', '==', 'some-brand')
//               .where('color', '==', 'gray')
//               .where('price', '>', 10)
//               .where('price', '<', 100)
//     });
//     this.items = this.itemCollection.valueChanges();
//   }