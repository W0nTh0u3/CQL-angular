import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-edge',
  imports: [RouterLink],
  templateUrl: './edge.component.html',
  styleUrl: './edge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdgeComponent {}
