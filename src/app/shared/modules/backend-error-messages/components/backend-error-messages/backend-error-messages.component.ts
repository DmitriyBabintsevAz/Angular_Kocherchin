import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss',
  standalone: false
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name].join(', ')
      return `${name} ${messages}`
    })
  }

}
