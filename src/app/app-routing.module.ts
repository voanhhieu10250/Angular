// import { AdminModule } from './admin/admin.module';
// import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
// import { Baitap8Component } from './baitap8/baitap8.component';
// import { Baitap2Component } from './baitap2/baitap2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
// import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
    // Cách 1: Routing theo component
    // { path: "baitap2", component: Baitap2Component },
    // { path: "baitap8", component: Baitap8Component },
    // { path: "movies", component: MovieComponent },

    //Cách 2: Routing theo module
    // pathMatch: full <=> exact bên React
    // { path: "", pathMatch: 'full', loadChildren: () => MainModule }
    { path: "admin", loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
    { path: "", loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
