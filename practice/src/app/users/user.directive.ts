import { Directive, Renderer2, OnInit, TemplateRef, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective implements OnInit,AfterViewInit {
  @HostListener('mouseenter',['$event']) mouseenter=(event:Event)=>{
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow');
  }

  @HostListener('mouseleave',['$event']) mouseleave=(event:Event)=>{
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
  }

  constructor(private element: ElementRef,private renderer:Renderer2,) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
    console.log('Triggered');
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','green');
    console.log('Triggered view');
  }

}
