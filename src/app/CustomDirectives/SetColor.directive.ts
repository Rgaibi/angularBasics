import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setColor]'
})
export class SetColor implements OnInit {
    // private element: ElementRef;
    constructor(private element: ElementRef,private Renderer: Renderer2) { 
        // this.element = element;
    }

    ngOnInit() {
        // this.element.nativeElement.style.color = '#000000ff';       
        // this.element.nativeElement.style.fontWeight = 'bold';
        this.Renderer.setStyle(this.element.nativeElement, 'color','#000000ff');
                this.Renderer.setStyle(this.element.nativeElement, 'fontWeight','bold');        
                // this.Renderer.setAttribute(this.element.nativeElement, 'title','exemple of setAttribute');         
    }
}