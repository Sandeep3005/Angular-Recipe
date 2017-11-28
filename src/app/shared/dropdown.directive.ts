import { 
  Directive, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  HostBinding, 
  OnInit } from "@angular/core";


@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit {
    // isOpen: boolean = false;

    // constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

    // ngOnInit() {}

    // @HostListener('click') mouseover(eventData: Event) {
    //   console.log('hi');
    //   // if (!this.isOpen) {
    //   //   this.isOpen = true;
    //   //   this.renderer.addClass(this.elemRef.nativeElement, "active");
    //   //   this.renderer.setStyle(this.elemRef.nativeElement.children[1], 'display', 'table-cell');
    //   // } else {
    //   //   this.isOpen = false;
    //   //   this.renderer.removeClass(this.elemRef.nativeElement, "active");
    //   //   this.renderer.setStyle(this.elemRef.nativeElement.children[1], 'display', 'none');
    //   // }
    // }
    ngOnInit() { }

    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') mouseover(eventData: Event) {
      this.isOpen = !this.isOpen;
    }

}