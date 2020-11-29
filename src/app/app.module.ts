import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './shared/components/components.module';
import { PipeModule } from './shared/pipe/pipe.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import { ShoppingModule } from './shopping/shopping.module';
import { MovieModule } from './movie/movie.module';
import { DirectivesModule } from './directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomeModule } from './home/home.module';
import { Baitap2Module } from './baitap2/baitap2.module'
import { DataBindingModule } from './data-binding/data-binding.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NgModule: meta-data
@NgModule({
  // declarations: nơi khai báo các component được module quản lý
  // => AppComponent đang được AppModule quản lý
  // Component không thể đứng 1 mình, nó PHẢI được 1 module quản lý
  // 1 component chỉ được 1 module quản lý
  declarations: [
    AppComponent,
    DemoComponent
  ],

  // imports: nơi khai báo các module
  // HomeModule: HeaderComponent, FooterComponent, ContentComponent
  // => để sử dụng được các component của HomeModule trong AppModule cần phải imports: [HomeModule]
  // 2 loại module:
  // - Module do angular cung cấp: RouterModule, HttpClientModule
  // - Module do dev định nghĩa: HomeModule
  imports: [
    BrowserModule,
    HomeModule,
    Baitap2Module,
    DataBindingModule,
    DirectivesModule,
    MovieModule,
    ShoppingModule,
    Baitap8Module,
    PipeModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    AdminRoutingModule
  ],

  // providers: nơi khái báo các services
  providers: [],

  // Khai báo AppComponent là component khởi chạy đầu tiên
  bootstrap: [AppComponent]
})
export class AppModule { }
