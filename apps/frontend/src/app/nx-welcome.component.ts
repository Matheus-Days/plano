import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'plano-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      {{ ip }}
    </div>
  `,
  styles: [],
})
export class NxWelcomeComponent implements AfterViewInit {
  ip = '';

  constructor(private httpClient: HttpClient) { }

  getIpinfo(): void {
    this.httpClient.get<{ip: string}>('https://api.myip.com', {
    }).subscribe(res => {
      this.ip = res.ip;
    })
  }

  ngAfterViewInit(): void {
    this.getIpinfo();
  }
}
