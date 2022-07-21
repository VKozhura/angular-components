import { Directive, ElementRef, Renderer2, HostListener, HostBinding} from "@angular/core";

@Directive({
    selector: '[bold]', // селектор для атрибута ([bold])
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective {
    // constructor( private elementRef: ElementRef) { 
    //     this.elementRef.nativeElement.style.fontWeight = 'bold'
    // }

    // либо

    // constructor(private elementRef: ElementRef, private renderer: Renderer2){
    //     this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    // }

    //======= HostListener
    // constructor(private element: ElementRef, private renderer: Renderer2){
    //     this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    // }
    
    // позволяет связать событие дом с методом директивы
    // @HostListener("mouseenter") onMouseEnter() {
    //     this.setFontWeight("bold");
    // }
 
    // @HostListener("mouseleave") onMouseLeave() {
    //     this.setFontWeight("normal");
    // }
 
    // private setFontWeight(val: string) {
    //     this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    // }

    //======= HostBinding связывает свойство класса со свойством элемента
    // private fontWeight = "normal";
     
    // @HostBinding("style.fontWeight") get getFontWeight(){
    //     return this.fontWeight;
    // }
     
    // @HostBinding("style.cursor") get getCursor(){
    //     return "pointer";
    // }
     
    // @HostListener("mouseenter") onMouseEnter() {
    //     this.fontWeight ="bold";
    // }
 
    // @HostListener("mouseleave") onMouseLeave() {
    //     this.fontWeight = "normal";
    // }

    //==========================

    constructor(private element: ElementRef, private renderer: Renderer2){
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }
     
    onMouseEnter(){
        this.setFontWeight("bold");
    }
    onMouseLeave(){
        this.setFontWeight("normal");
    }
    
    private setFontWeight(val: string) {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    }
}