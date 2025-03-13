import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sonido-eventos-update',
  standalone: false,
  templateUrl: './sonido-eventos-update.component.html',
  styleUrls: ['./sonido-eventos-update.component.css']
})
export class SonidoEventosUpdateComponent {
  @Input() sonidoEvento: any;
  @Output() close = new EventEmitter<void>();

  cerrarModal() {
    this.close.emit();
  }

  guardarCambios() {
    console.log('Guardando cambios:', this.sonidoEvento);
    this.cerrarModal(); // Cierra el modal después de guardar
  }
}