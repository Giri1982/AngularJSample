import { Component } from '@angular/core';
import { Customer } from '../Model/Customer';

@Component({
    selector: 'app-customer',
    templateUrl: '../UI/Customer.html',
    styleUrls: ['../UI/Customer.css']
})
export class CustomerComponent {
    // binding logic
    currentCustomer: Customer = new Customer();
    // customer collection
    customers: Array<Customer> = new Array<Customer>();
    Select(custselected: Customer) {
        this.currentCustomer = Object.assign({}, custselected);
    }
    Clear() {
        this.currentCustomer = new Customer();
    }
    Update() {
        for (const cust of this.customers) {
            if (cust.CustomerCode === this.currentCustomer.CustomerCode) {
                cust.CustomerName = this.currentCustomer.CustomerName;
                cust.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer();
    }
    Add() {
        this.customers.push(this.currentCustomer);
        this.currentCustomer = new Customer();
    }
}