import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

const components = [FooterComponent, HeaderComponent, SidebarComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  exports: [...components],
})
export class LayoutModule { }
