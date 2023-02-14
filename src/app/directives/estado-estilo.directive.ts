import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstadoEstilo]'
})
export class EstadoEstiloDirective implements OnInit {
  @Input('appEstadoEstilo') estadoActivo!: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'text-align', 'center')
    this.renderer.setStyle(
      this.element.nativeElement, 'color', this.estadoActivo ? 'green' : 'red')
  }

}
