import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleInputInterface } from '../../../../types/article-input.interface';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>()

  // initialValues: ArticleInputInterface = {
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: []
  // }

  form = this.fb.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });

  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.initializeForm()
  }


  initializeForm(): void {
    // if (this.initialValuesProps) {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' ')
    })
    // }

    // if (!this.initialValues) {
    //   throw new Error('Inputs are not provided')
    // }
    // this.form.patchValue({
    //   title: this.initialValues.title,
    //   description: this.initialValues.description,
    //   body: this.initialValues.body,
    //   tagList: this.initialValues.tagList.join(' '),
    // })
    // console.log(this.initialValues.title);
  }

  onSubmit(): void {
    const formValue = this.form.getRawValue()
    const articleFormValues: ArticleInputInterface = {
      ...formValue,
      tagList: formValue.tagList.split(' '),
    }
    this.articleSubmitEvent.emit(articleFormValues)
  }

}
