import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesSerivce } from '../../shared/services/categories.service';
import { Message } from 'src/app/shared/models/message.model';


@Component({
  selector: 'wfm-edit-catregory',
  templateUrl: './edit-catregory.component.html',
  styleUrls: ['./edit-catregory.component.scss']
})
export class EditCatregoryComponent implements OnInit {
  @Input() categories: Category[]=[];
  @Output() onCategoryEdit= new EventEmitter<Category>();
  currentCategoryId=1;
  constructor(private categoriesservice: CategoriesSerivce) { }
  currentCategory: Category;
  message: Message;
  ngOnInit() {
    this.onCategoryChange();
    this.message=new Message('success', '');
  }
  onSubmit(form: NgForm){
    let {name,capacity}=form.value;
    if(capacity<0) capacity*=-1;
    const category= new Category(name, capacity, +this.currentCategoryId);
    
    this.categoriesservice.updateCategories(category).subscribe((category:Category)=>{
    this.onCategoryEdit.emit(category);
    this.message.text='Категория успешно откредактирована';
    window.setTimeout(()=>this.message.text='', 5000);
     
      
  })

  }
  onCategoryChange(){
      this.currentCategory=this.categories.find(c=>c.id===+this.currentCategoryId);
  }
}
