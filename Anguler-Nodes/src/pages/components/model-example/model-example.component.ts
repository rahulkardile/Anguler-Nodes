import { Component, NgModule } from '@angular/core';
import { IPerson } from '../../../core/model/Interface/IPerson';
import { IStudent } from '../../../core/model/Interface/IStudent';
import { Student } from '../../../core/model/Class/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model-example.component.html',
  styleUrl: './model-example.component.css'
})
export class ModelExampleComponent {
  persons:IPerson[] =[];

  personData: {name: string, email: string, city: string}[] =  [

    {
      name: 'Rahul Kardile',
      email: 'rahulkardile321@gmail.com',
      city: 'Pune',
    },

    {
      name: 'Mahesh Pote',
      email: 'maheshpote321@gmail.com',
      city: 'Pune',
    },

    {
      name: 'Ravi Pote',
      email: 'ravipote321@gmail.com',
      city: 'Surat',
    },

    {
      name: 'Bhakti Purnale',
      email: 'bhaktipurnale321@gmail.com',
      city: 'GangaKhed',
    },

    {
      name: 'Rahul Sonavane',
      email: 'Rahulsonavane321@gmail.com',
      city: 'Sambhajinagar',
    },

  ]

  getPersons(){
    this.persons = this.personData
  }

  student : IStudent = new Student();

  getStudent(){
    alert("Welcome Buddy " + this.student.name)
    console.log(this.student);
    
  }

}

