import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RendenceDetailsComponent } from  './rendences/rendence-details/rendence-details.component';
import { AddResidenceComponent } from './rendences/add-residence/add-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence/:id', component: RendenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'Apartments', component: ApartmentsComponent },
  { path: 'Apartments/residence/:id', component: ApartmentsByResidenceComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
