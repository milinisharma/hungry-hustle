import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// PrimeNg Modules
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule
  ],
  exports: [
    ButtonModule,
    SidebarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]})
export class SharedModule { }
