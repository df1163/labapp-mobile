import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROS } from './mock-heroes'

@Injectable()
export class HeroService{

    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROS);
    }
}