import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'planning-app';
  workingHours: any[] = []
  myForm: FormGroup;  

  constructor(private fb:FormBuilder) { 

    this.myForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  
  }

  quantities() : FormArray {  
    return this.myForm.get("quantities") as FormArray  
  } 

  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '',  
    })  
  }
  
  addQuantity(index:any) {  
    
    this.workingHours[index].schedule.push({startTime:'',endTime:''});  
  }

  

  removeQuantity(i:number,ind:number) {  
    this.workingHours[i].schedule.pop(ind)  
  }

  onAdding() {  
    console.log(this.myForm.value);  
  } 


  ngOnInit() {
    this.workingHours = [{
      day: "monday",
      schedule: [{ startTime: '', endTime: '' }]
    }, {
      day: "tuesday",
      schedule: [{ startTime: '', endTime: '' }]
    }, {
      day: "wednesday",
      schedule: [{ startTime: '', endTime: '' }]
    }, {
      day: "thursday",
      schedule: [{ startTime: '', endTime: '' }]
    }, {
      day: "friday",
      schedule: [{ startTime: '', endTime: '' }]
    }, {
      day: "saturday",
      schedule: [{ startTime: '', endTime: '' }]
    }, {
      day: "sunday",
      schedule: [{ startTime: '', endTime: '' }]
    }]
  }

  onSubmit() {
    console.log(this.workingHours)
  }
}
