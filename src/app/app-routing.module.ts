import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './_components/bar-chart/bar-chart.component';
import { DragDropComponent } from './_components/drag-drop/drag-drop.component';

const routes: Routes = [
  {path: 'bar', component: BarChartComponent},
  {path: 'dragndrop', component: DragDropComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dragndrop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
