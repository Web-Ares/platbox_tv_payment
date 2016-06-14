import { Directive, ElementRef, Input } from 'angular2/core';

@Directive({
    selector: '[addClassActive]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class AddClassDirective {

    private newClass = 'active';
    private elem: HTMLElement;
    e;
    firstActive = true;

    constructor( elem: ElementRef ) {
        this.elem = elem.nativeElement;
    }

    @Input() set defaultColor( colorName: string ){

        this.newClass = colorName || this.newClass;

    }

    @Input( 'addClassActive' ) highlightColor: string;

    removeClass( item, className ){

        console.log(item)
        console.log(className)

        let classNameStart = item.className.indexOf( className );

        if( classNameStart > 0 ){
            if( item.className == className ){
                item.className = '';
            } else {
                let classesArr = item.className.split( className );

                if( classesArr[0].trim() == '' || classesArr[1].trim() == '' ) {
                    item.className = classesArr[0].trim() + ' ' + classesArr[1].trim();
                } else {
                    item.className = classesArr[0].trim() + ' ' + classesArr[1].trim();
                }

            }
        }

    }

    addClass( item, className ){

        if( item.className.indexOf( className ) < 0 ){

            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }

    onMouseEnter() {

        if( this.elem.parentElement.getElementsByClassName('active').length ) {

            let elems = this.elem.parentElement.getElementsByClassName('active');

            for( var i = 0;i <= elems.length; i++ ) {
                this.removeClass( elems[ 0 ], 'active' );
            }

        }

        this.addClass( this.elem, 'active' );
    }

    onMouseLeave() {
        //this.removeClass( this.elem, this.highlightColor || this.newClass );
    }

}
