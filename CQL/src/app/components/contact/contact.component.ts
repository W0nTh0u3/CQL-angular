import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contact } from '../../content/cql-content';
@Component({ selector: 'app-contact', templateUrl: './contact.component.html', styleUrl: './contact.component.scss', changeDetection: ChangeDetectionStrategy.OnPush }) export class ContactComponent { protected readonly contact = contact; }
