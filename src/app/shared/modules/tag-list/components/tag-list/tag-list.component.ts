import { Component, Input } from '@angular/core';
import { PopularTagsType } from '../../../../types/popular-tags-type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagsType[]
}
