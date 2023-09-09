import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class IpService {
  constructor(private readonly httpService: HttpService) {}

  getIp(): Observable<string> {
    return this.httpService.get('https://ipinfo.io/ip').pipe(map(res => res.data));
  }
}