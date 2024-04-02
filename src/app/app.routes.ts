import { Routes } from '@angular/router';
import { FormCardComponent } from './components/form-card/form-card.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    {
        path: '',
        component: FormCardComponent
    },
    {
        path: 'form-card',
        component: FormCardComponent
    },
    {
        path: 'table',
        component: TableComponent
    }
];
