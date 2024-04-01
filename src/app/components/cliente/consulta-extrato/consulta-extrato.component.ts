import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-consulta-extrato',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './consulta-extrato.component.html',
  styleUrl: './consulta-extrato.component.scss',
})
export class ConsultaExtratoComponent {
  lastDate!: Date;

  transactions: Transaction[] = [
    {
      isEntry: true,
      date: new Date('2024-03-14T13:00:00'),
      operation: 'Depósito',
      client: 'João',
      value: 500.0,
    },
    {
      isEntry: false,
      date: new Date('2024-03-14T12:30:00'),
      operation: 'Saque',
      client: 'João',
      value: 100.0,
    },
    {
      isEntry: false,
      date: new Date('2024-03-13T15:45:00'),
      operation: 'Transferência',
      client: 'João',
      value: 200.0,
      origin: 'João',
      destination: 'Maria',
    },
    {
      isEntry: true,
      date: new Date('2024-03-12T10:15:00'),
      operation: 'Depósito',
      client: 'João',
      value: 300.0,
    },
    {
      isEntry: false,
      date: new Date('2024-03-12T09:20:00'),
      operation: 'Saque',
      client: 'João',
      value: 50.0,
    },
    {
      isEntry: false,
      date: new Date('2024-03-11T17:30:00'),
      operation: 'Transferência',
      client: 'João',
      value: 150.0,
      origin: 'Maria',
      destination: 'Pedro',
    },
    {
      isEntry: true,
      date: new Date('2024-03-11T17:30:00'),
      operation: 'Transferência',
      client: 'João',
      value: 700.0,
      origin: 'Maria',
      destination: 'João',
    },
  ];

  dateChanged(date: Date) {
    const formattedDate = date.toISOString().slice(0, 10); // Obtém "YYYY-MM-DD" da data
    const lastDateFormatted = this.lastDate
      ? this.lastDate.toISOString().slice(0, 10)
      : null;

    if (formattedDate !== lastDateFormatted) {
      this.lastDate = date;
      return true;
    }

    this.lastDate = date;
    return false;
  }
}

export interface Transaction {
  isEntry: boolean;
  date: Date;
  operation: string;
  client: string;
  value: number;
  origin?: string;
  destination?: string;
}
