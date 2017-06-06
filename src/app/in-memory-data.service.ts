
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const memoryContextService = [
      { id: 11, name: '张三1' },
      { id: 12, name: '张三2' },
      { id: 13, name: '张三3' },
      { id: 14, name: '张三4' },
      { id: 15, name: '张三5' },
      { id: 16, name: '张三6' },
      { id: 17, name: '张三7' },
      { id: 18, name: '张三8' },
      { id: 19, name: '张三9' },
      { id: 20, name: '张三10' }
    ];
    return { memoryContextService };
  }
}
