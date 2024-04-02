import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from '../toolbar/toolbar.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [ToolbarComponent, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDialogModule],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.css'
})
export class FormCardComponent {
  
  constructor(public dialog: MatDialog) {}
  
  name: string = 'Solovino';
  type: number = 1;

  openDialog(): void {
    this.dialog.open(Dialog, {
      data: { name: this.name, type: this.type }
    });
  }

}

@Component({
  selector: 'dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css'],
})
export class Dialog {
  private petService = inject(PetService);

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: Pet
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPet() {
    this.petService.addPet({ name: this.data.name, type: this.data.type });
    this.onNoClick();

    var inputName = document.getElementById('inputName') as HTMLInputElement;
    inputName.value = '';
  }

}
