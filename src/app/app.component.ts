import {Component, OnInit} from '@angular/core'
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup

  // Создаем форму и связываем ее с html через биндинг
  ngOnInit() {
    this.form = new FormGroup({})
  }

  submit() {
    console.log('Form submitted: ', this.form)
  }
}

