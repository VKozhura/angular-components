import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[while]',
})
export class WhileDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

}