import { Injectable } from '@nestjs/common';
import { HelloResponse } from '../common/HelloResponse'

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return {
      text: 'Hello world from nest in react!'
    };
  }
}
