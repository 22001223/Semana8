import { Injectable } from '@angular/core';

import { Pet } from '../models/pet.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets = new BehaviorSubject<Pet[]>([]);
  currentPets = this.pets.asObservable();
  constructor() { }

  addPet(pet: any) {
    let array = this.pets.getValue();
    array.push({...pet});
    this.pets.next(array);
  }

  getPets() {
    return this.pets;
  }

}
