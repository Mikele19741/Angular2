export class WFMEvent
{
  
   constructor(
       public type:string,
       public amount: number,
       public category: number,
       public date: string,
       public desciption :string,
       public id?: number,
       public catName?: string

   ){

   }
}