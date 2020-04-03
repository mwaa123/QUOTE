export class Quote {
        showDescription: boolean;
        constructor(public id: number,public name: string,public description:
           string,public author:string,public entryDate:Date){
          this.showDescription=false;
        }
}