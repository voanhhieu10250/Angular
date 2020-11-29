import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  // Nên để các tab khác rỗng lên trước để tối ưu hơn, vì angular sẽ duyệt từ trên xuống cho tới khi tìm được
  //tab thích hợp
  { path: "checkout", component: CheckoutComponent },
  {
    path: "", component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "movie", component: MovieComponent },
    ]
  }

];

@NgModule({
  // Ngoại trừ AppRoutingModule sử dụng forRoot, tất cả RoutingModule khác đều sử dụng forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
