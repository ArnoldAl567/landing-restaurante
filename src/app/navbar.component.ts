import { Component, HostListener, signal } from '@angular/core';

@Component({selector:'app-navbar', standalone:true, template:`
<header [class.scrolled]="scrolled()">
  <a class="brand" href="#inicio" aria-label="Sabor y Arte, inicio"><span>♨</span> Sabor<i>&</i>Arte</a>
  <button class="menu-btn" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Abrir menú">{{open() ? '×' : '☰'}}</button>
  <nav [class.open]="open()" aria-label="Navegación principal">
    @for(link of links; track link[0]) { <a [href]="link[1]" (click)="open.set(false)">{{link[0]}}</a> }
  </nav>
  <a class="gold-btn reserve" href="#reservas">Reservar mesa <span>↗</span></a>
</header>`, styles:[`
header{position:fixed;z-index:50;top:0;left:0;width:100%;padding:1.25rem 5vw;display:flex;align-items:center;gap:2.5rem;transition:.35s}header.scrolled{background:rgba(8,8,8,.9);backdrop-filter:blur(16px);padding-top:.8rem;padding-bottom:.8rem;border-bottom:1px solid #ffffff12}.brand{font-family:Italiana,serif;font-size:1.35rem;color:white;white-space:nowrap}.brand span,.brand i{color:var(--gold);font-style:normal}nav{display:flex;gap:1.6rem;margin-left:auto}nav a{font-size:.86rem;color:#ddd;position:relative}nav a:hover{color:var(--gold)}.reserve{margin-left:.6rem}.menu-btn{display:none;background:none;color:white;border:0;font-size:1.7rem}@media(max-width:900px){header{padding:1rem 5vw}.menu-btn{display:block;margin-left:auto}.reserve{display:none}nav{position:absolute;top:100%;left:4vw;right:4vw;background:#111;border:1px solid #ffffff14;border-radius:1rem;padding:1rem;display:none;flex-direction:column}nav.open{display:flex}}
`]
})
export class NavbarComponent{ open=signal(false); scrolled=signal(false); links=[['Inicio','#inicio'],['Menú','#especialidades'],['Nosotros','#nosotros'],['Galería','#galeria'],['Reservas','#reservas'],['Contacto','#contacto']]; @HostListener('window:scroll') onScroll(){this.scrolled.set(window.scrollY>40)} }
