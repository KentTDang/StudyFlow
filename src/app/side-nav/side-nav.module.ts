import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavRouterModule } from './side-nav.router.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav.component';




@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SideNavRouterModule,
    MatSidenavModule,
  ]
})
export class SideNavModule { }
