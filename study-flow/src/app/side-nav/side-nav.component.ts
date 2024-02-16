import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  sidenavMode = 'side';
  isExpanded = false;
  isShown = true;

  toggleSideNav(event: MouseEvent): void {
    const navListContainer = document.querySelector('.navigation')!;
    const isClickedInsideNavList = navListContainer.contains(event.target as Node);

    if (!isClickedInsideNavList) {
      this.isExpanded = !this.isExpanded;
      this.sidenavMode = this.isExpanded ? 'side' : 'over';
      this.isShown = !this.isShown;
    }
  }
}
