import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:'[highLight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.title = this.elementRef.nativeElement.textContent;
    }

}