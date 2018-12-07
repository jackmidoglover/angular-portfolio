import { Directive, ElementRef, AfterViewChecked, Input, HostListener} from '@angular/core';

@Directive({
    selector: '[myMatchHeight]'
})

export class MatchHeightDirective implements AfterViewChecked {
    @Input() myMatchHeight: string; 

    @HostListener('window: resize')
    onResize() {
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }
    constructor(private el: ElementRef){

    }

    ngAfterViewChecked(){
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    matchHeight(parent: HTMLElement, className: string){
        if (!parent) return;

        const children = parent.getElementsByClassName(className);

        if(!children) return;

        const itemHeights = Array.from(children).map(x => x.getBoundingClientRect().height);

        const maxHeight = itemHeights.reduce((prev, current) => {
            return current > prev ? current : prev;
        }, 0);

        Array.from(children).forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}