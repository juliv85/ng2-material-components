import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';

@Component({
    selector: 'phone',
    directives: [ REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor ],
    templateUrl: '../input-base/input-base.component.pug',
    styles: ['.form-control { text-align: right; } '],
})
export class PhoneComponent extends InputBase implements OnInit {

    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() disabled: boolean;
    @Input() value: number;
    @Input() fax: boolean;
    @Input() alt: boolean;

    // validators
    @Input() required: boolean;

    constructor(el: ElementRef) {
        super(el);
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();

        if (!this.leftIcon) {
            this.leftIcon = this.fax ? 'account-box-phone' : 'phone';
        }

        // TODO: Add the mask control
        // let mask: string = '(000) 000 - 0000';

        // $(this._el.nativeElement)
        //     .find('.form-control')
        //     .mask(mask);
    }

    public ngOnDestroy(): void {

    }

}
