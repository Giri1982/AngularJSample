import { Component } from '@angular/core';
import { Customer } from '../Model/Customer';

@Component({
    selector: 'app-root',
    templateUrl : '../UI/Customer.html'
})
export class CustomerComponent {
    // binding logic
    customerobj: Customer = new Customer();
}
