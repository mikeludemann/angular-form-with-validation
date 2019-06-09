import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
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
export class FormBuilderComponent implements OnInit {

  contactFormWithBuilder: any;
  toggle: string;

  constructor(private buildForm: FormBuilder) { }

	ngOnInit() {
  
    this.contactFormWithBuilder = this.buildForm.group({
      firstName: ['',
        Validators.required,
        Validators.minLength(1)
      ],
      lastName: ['',
        Validators.required,
        Validators.minLength(1)
      ],
      userName: ['',
        Validators.required,
        Validators.minLength(1)
      ],
      address: this.buildForm.group({
        street: ['',
          Validators.required,
          Validators.minLength(1)
        ],
        streetnumber: ['',
          Validators.required,
          Validators.minLength(1)
        ],
        city: ['',
          Validators.required,
          Validators.minLength(1)
        ],
        country: ['',
          Validators.required,
          Validators.minLength(1)
        ],
        postalcode: ['',
          Validators.required,
          Validators.minLength(1)
        ]
      })
    });

  }

  validationForm(){
    console.log(this.contactFormWithBuilder.value);
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
