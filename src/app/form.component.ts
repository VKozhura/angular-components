import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";

export class Phone {
    constructor(
        public title: string, 
        public price: number,
        public company: string
    ) {}
}

@Component({
    selector: 'form-app',
    templateUrl: './form.component.html'
})
export class FormComponent {

    // title: string = "";
    // price: number = 0;
    // company: string = "";
    phone = new Phone('', 0, '')
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    
    // addPhone(){
    //     this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    // }

    addPhone(title:NgModel, price: NgModel, comp: NgModel){
        console.log(title);
        console.log(price);
        console.log(comp);
    }

    onTitleChange() {
        if(this.phone.title=="нет") {
            this.phone.title = "неизвестно";
        }
    }
}