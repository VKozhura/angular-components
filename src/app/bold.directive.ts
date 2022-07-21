import { Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
    selector: '[bold]' // селектор для атрибута ([bold])
})
export class BoldDirective {
    // constructor( private elementRef: ElementRef) { 
    //     this.elementRef.nativeElement.style.fontWeight = 'bold'
    // }

    // либо

    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}