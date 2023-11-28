import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  selectedItem: any = null;
  toggleAccordionItem(item: any) {
    item.open = !item.open;
    if (this.selectedItem && this.selectedItem !== item) {
      this.selectedItem.open = false;
    }
    this.selectedItem = item;
  }

  // Tabs
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }
}
