import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add-component',
  templateUrl: './product-add-component.component.html',
  styleUrls: ['./product-add-component.component.css']
})
export class ProductAddComponentComponent implements OnInit {
  productAddForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      nameControl: [''],
      categorienControl: [''],
      prixControl: [''],
      imageControl: [''],
      descriptionControl: ['']
    });
  }

  onAjouter(): void {
    const name = this.productAddForm.controls['nameControl'].value;
    const categorie = this.productAddForm.controls['categorienControl'].value;
    const prix = this.productAddForm.controls['prixControl'].value;
    const image = this.productAddForm.controls['imageControl'].value;
    const description = this.productAddForm.controls['descriptionControl'].value;
    
    alert(JSON.stringify(this.productAddForm.value));
  }
}
