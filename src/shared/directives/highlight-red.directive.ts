import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightRed]',
})
export class HighlightRedDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.color = '#b50938';
  }
}
