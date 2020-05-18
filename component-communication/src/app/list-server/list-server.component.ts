import { 
  Component, 
  OnInit, 
  OnChanges,
  Input, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.css']
})
export class ListServerComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() element : { name: String, description : string };
  @Input() name : string;
  @ViewChild('heading',{static:true}) heading : ElementRef;
  @ContentChild('content',{static:true}) content: ElementRef;

  constructor() { 
    console.log(`Constructor Executed.`);
   }

   ngOnChanges(change:SimpleChanges){
    console.log(`ngOnChanges Executed.`);
    console.log('Changes Object',change);
   }

  ngOnInit(): void {
    console.log(`ngOnInit Executed.`);
    console.log(`Template Reference Local: ${this.heading.nativeElement.textContent}`);
    console.log(`Template Reference From Parent : ${this.content.nativeElement.textContent}`);
  }

  ngDoCheck(){
    console.log(`ngDoCheck Executed.`);
  }

  ngAfterContentInit(){
    console.log(`After Content init`);
    console.log(`Template Reference From Parent : ${this.content.nativeElement.textContent}`);
  }

  ngAfterContentChecked(){
    console.log(`Ng after content checked`);
  }

  ngAfterViewChecked(){
    console.log(`Ng after view checked`);
  }

  ngAfterViewInit(){
    console.log(`Ng After View init`);
    console.log(`Template Reference : ${this.heading.nativeElement.textContent}`);
  }

  ngOnDestroy(){
    console.log(`Ng On Destroy`);
  }

}
