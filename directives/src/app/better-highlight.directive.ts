import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor:string; 

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //his.renderer.setStyle(this.element.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(event:Event){
    //this.renderer.setStyle(this.element.nativeElement,'background-color','red');
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(event:Event){
    //this.renderer.setStyle(this.element.nativeElement,'background-color','yellow');
    this.backgroundColor = this.defaultColor;
  }
}
