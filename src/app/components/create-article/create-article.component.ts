import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  artcileForm!: FormGroup;
  submitted = false;

  constructor(private http: HttpService, private route: Router) {}

  ngOnInit(): void {
    this.artcileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      picture: new FormControl(Validators.required),
    });
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.artcileForm.get('picture')?.setValue(file);
    }
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;

    const formData = new FormData();
    formData.append('picture', this.artcileForm.get('picture')?.value);
    formData.append(
      'data',
      JSON.stringify({ name: form.value.name, price: form.value.price })
    );
    this.http.addArticle(formData).subscribe((response) => {
      this.artcileForm.reset();
      this.route.navigate(['/articles']);
    });
  }

  get f() {
    return this.artcileForm.controls;
  }
}
