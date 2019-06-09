import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'form-control-group',
	templateUrl: './form-control-group.component.html',
	styleUrls: ['./form-control-group.component.css'],
  animations:[
    trigger('openForm',[
      state('close', style({
        display: 'none',
        border: '0px solid #ddd'
      })),
      state('open', style({
        display: 'block',
        border: '0.5px solid #ddd'
      })),
      transition('open => close', animate('2s ease-in-out')),
      transition('close => open', animate('1s ease-in-out'))
    ])
  ]
})
export class FormControlGroupComponent implements OnInit {

  contactForm: any;
  toggle: string;

  constructor() { }

	ngOnInit() {
  
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      address: new FormGroup({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ]),
        streetnumber: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ]),
        country: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ]),
        postalcode: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ])
      })
    });

  }

  validationForm(){
    console.log(this.contactForm.value);
  };

  toggleForm(){
    if(this.toggle == 'close'){
      this.toggle = 'open';
    }
    else if(this.toggle == 'open'){
      this.toggle = 'close';
    }
    else {
      this.toggle = 'close';
    }
  };

}
