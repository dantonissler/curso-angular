import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from './../../../core/plataform-detector/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})

export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private PlatformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.PlatformDetectorService.isPlatformBrowser && this.element.nativeElement.click();
  }
}
