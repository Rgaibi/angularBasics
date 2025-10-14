import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setColor]'
})
export class SetColor implements OnInit {
    // private element: ElementRef;
    constructor(private element: ElementRef) { 
        // this.element = element;
    }

    ngOnInit() {
        this.element.nativeElement.style.color = '#000000ff';       
        this.element.nativeElement.style.fontWeight = 'bold';        
    }
}