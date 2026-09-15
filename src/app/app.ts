import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Department = {
  id: number;
  name: string;
  description: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyIkeaRoadMap');
    selectedDepartment: Department | null = null;
     departments: Department[] = [
    {
      id: 12,
      name: 'Posuđe',
      description: 'Odjel s posuđem za pečenje, posluživanje i kuhanje.'
    },
    {
      id: 20,
      name: 'Ugradbena rasvjeta',
      description: 'Odjel s rasvjetom za kuhinje i druge prostore.'
    }
  ];

  openDepartment(id: number): void {
    this.selectedDepartment =
      this.departments.find(department => department.id === id) ?? null;
  }

  closeDetails(): void {
    this.selectedDepartment = null;
  }
}
