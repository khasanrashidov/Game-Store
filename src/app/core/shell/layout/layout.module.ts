import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const components = [FooterComponent, HeaderComponent, SidebarComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgOptimizedImage],
  exports: [...components],
})
export class LayoutModule {}
