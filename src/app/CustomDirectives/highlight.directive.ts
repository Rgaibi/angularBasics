import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @HostListener('mouseenter') onMouserEnter() {
    this.renderer.addClass(this.element.nativeElement, 'zoomed');
  }

  @HostListener('mouseleave') onMouserOut() {
        this.renderer.removeClass(this.element.nativeElement, 'zoomed');

  }


}
