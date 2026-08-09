import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../content/cql-content';

@Component({ selector: 'app-services', imports: [RouterLink], templateUrl: './services.component.html', styleUrl: './services.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class ServicesComponent { protected readonly services = services; }
