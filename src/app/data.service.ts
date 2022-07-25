export class DataService {
    
    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];
    
    getData(): string[] {
        return this.data
    }

    addData(name: string) {
        this.data.push(name);
    }

}

// В сервисе определен массив данных и методы для работы с ним. 
// В реальном приложении эти данные можно получать с сервера или из какого-либо внешнего хранилища.