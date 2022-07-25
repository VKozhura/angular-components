import { Injectable, Optional } from "@angular/core";
import { LogService } from "./log.service";



@Injectable() // к классу сервиса применется декоратор, чтобы указать, что сервис может использоваться в других сервисах
export class DataService {
    
    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];

    constructor(@Optional() private logService: LogService) {}
    
    getData(): string[] {
        if (this.logService) this.logService.write('операция получения данных');
        return this.data
    }

    addData(name: string) {
        this.data.push(name);
        if (this.logService) this.logService.write("операция добавления данных");
    }

}

// В сервисе определен массив данных и методы для работы с ним. 
// В реальном приложении эти данные можно получать с сервера или из какого-либо внешнего хранилища.