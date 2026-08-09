import { ChangeDetectionStrategy, Component } from '@angular/core';
import { people } from '../../content/cql-content';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent { protected readonly people = people; }
