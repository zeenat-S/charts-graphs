import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './_components/bar-chart/bar-chart.component';

const routes: Routes = [
  {path: 'bar', component: BarChartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'bar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
