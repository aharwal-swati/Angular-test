import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  { path: '',component: StudentComponent},
  { path: 'student',component: StudentComponent},
  { path: '**',component: StudentComponent},
];

@NgModule({
  declarations:[StudentComponent],
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
