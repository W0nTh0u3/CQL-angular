import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Principle {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly principles: readonly Principle[] = [
    {
      title: 'Vision',
      description:
        'To be the absolute force in business consulting, recognized for our integrity and our pledge of total quality in creating an environment where our people can wholly grow and our business partners lead the changing times.',
    },
    {
      title: 'Mission',
      description:
        'To provide the best-fit practices or solutions to build a satisfied client base by developing a people-driven and management supported organization.',
    },
    {
      title: 'Commitment',
      description:
        'We are committed to quality, provide professional services to improve business performance. In everything we do, we exceed your expectations and deliver value to help you succeed in the marketplace.',
    },
  ];
}
