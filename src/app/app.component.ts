import { AfterViewInit, Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar.component';import { HeroComponent } from './hero.component';import { ReservationComponent } from './reservation.component';

@Component({selector:'app-root',standalone:true,imports:[NavbarComponent,HeroComponent,ReservationComponent],templateUrl:'./app.component.html',styleUrls:['./app.component.css','../whatsapp.css']})
export class AppComponent implements AfterViewInit{
 // Cambia este valor para actualizar todos los enlaces de WhatsApp del sitio.
 readonly whatsappNumber = '51999999999';
 readonly whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('Hola Sabor&Arte, quisiera obtener más información y realizar una reserva.')}`;
 lightbox=signal<string|null>(null); quote=signal(0); menu=[
  {name:'Lomo Sabor&Arte',price:'S/. 45.00',desc:'Medallón de res, reducción de vino tinto y vegetales.',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85'},
  {name:'Pasta Alfredo',price:'S/. 32.00',desc:'Fettuccine artesanal, parmesano y crema suave.',img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85'},
  {name:'Parrilla Especial',price:'S/. 55.00',desc:'Selección de cortes al fuego con papas doradas.',img:'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85'},
  {name:'Risotto de la Casa',price:'S/. 38.00',desc:'Arroz arborio, hongos, parmesano y hierbas.',img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85'},
  {name:'Salmón Gourmet',price:'S/. 49.00',desc:'Salmón sellado, puré rústico y salsa cítrica.',img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85'},
  {name:'Postre Sabor&Arte',price:'S/. 22.00',desc:'Chocolate intenso, frutos rojos y crocante.',img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85'}];
 gallery=['https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85'];
 testimonials=[{name:'María Fernanda',text:'Excelente comida, presentación increíble y una atención espectacular. Definitivamente volveremos.'},{name:'Carlos Mendoza',text:'Una experiencia impecable de principio a fin. El lomo y los cócteles fueron memorables.'},{name:'Lucía Ramírez',text:'El ambiente perfecto para celebrar. Cada detalle se siente cuidado y el servicio es cálido.'}];
 ngAfterViewInit(){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));setInterval(()=>this.quote.update(v=>(v+1)%this.testimonials.length),5000)}
 open(src:string){this.lightbox.set(src)} close(){this.lightbox.set(null)}
}
