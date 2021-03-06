import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'my-license',
    templateUrl: 'app/templates/license.component.html',
    styleUrls: [ 'app/css/license.component.css' ]
})

export class LicenseComponent{
    @Output() acceptLicense = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() showTransaction = new EventEmitter();

    showedText: boolean = false;

    content = {
        text: 'Нажимая кнопку “Готово” Вы принимаете условия Лицензионного соглашения пользователя.',
        btnLicense: 'текст соглашения',
        btnCancel: 'отмена',
        btnOk: 'готово',
        btnRead: 'закрыть',
        licenseTitle: 'Лицензионное соглашение',
        licenseTexts: [
            'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean \
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed \
            odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio\
            tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti\
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna\
            eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum\
            fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl\
            quis neque. Suspendisse in orci enim.',
            'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean\
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed\
            odio sit amet nibh vulputate cursus a sit amet mauris.',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat\
            justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet\
            nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas\
            quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.',
            'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean\
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed\
            odio sit amet nibh vulputate cursus a sit amet mauris.'
        ]
    };


    addClass(item, className ){

        if( item.className.indexOf( className ) < 0 ){
            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }

    onOk(){
        this.showTransaction.emit( null );
        console.log( 2 );
    }

    onCancel(){
        this.cancel.emit( null );
    }

    onReadOk(){
        this.showedText = false;
        console.log( 3 );
    }

    onReadText(){
        
        this.showedText = true;
    }

}