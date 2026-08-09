import { ChangeDetectionStrategy, Component } from '@angular/core';
import { industries } from '../../content/cql-content';
@Component({ selector: 'app-clients', templateUrl: './clients.component.html', styleUrl: './clients.component.scss', changeDetection: ChangeDetectionStrategy.OnPush }) export class ClientsComponent { protected readonly industries = industries; }
