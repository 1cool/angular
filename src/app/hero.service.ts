import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class HeroService {

  constructor(private messageService: MessagesService) {
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }

  getHeros(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROS);
  }
}
