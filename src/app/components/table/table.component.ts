import { Component, inject } from '@angular/core';

import { ToolbarComponent } from '../toolbar/toolbar.component';

import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet.model';
import { TypePipe } from '../../pipes/type.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ToolbarComponent, MatCardModule, MatTableModule, TypePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  private petService = inject(PetService);
  displayedColumns: string[] = ['name', 'type'];
  pets: Pet[] = [];

  ngOnInit() {
    this.getPets();
  }

  ngOnChanges() {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe({
      next: (pets: Pet[]) => {
        console.log(pets);
        this.pets = [...pets];
      },
      error: () => {}
    })
  }

}
