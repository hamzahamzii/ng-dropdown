import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { setOptions, filterOptions } from '../../store/dropdown.actions';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css'],
})
export class DropdownFilterComponent implements OnInit {
  @Input() public placeholder: string = 'Type to filter';

  @ViewChild('filterInput', { static: false }) public filterInput: ElementRef;
  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target))
      this.isDropdownOpen = false;
  }

  filterText = '';
  isDropdownOpen = false;
  selectedOption: string | null = null; // Track selected option

  constructor(public store: Store<AppState>, private eRef: ElementRef) {}

  ngOnInit() {
    // Mock data, replace with your actual data
    const options = ['Option 1', 'Option 2', 'Option 3'];
    this.store.dispatch(setOptions({ options }));
  }

  onFilterChange() {
    this.store.dispatch(filterOptions({ filterText: this.filterText }));
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(option: string = '') {
    if (option) this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  clearSelection() {
    this.selectedOption = null;
    this.filterText = ''; // Clear the filter text when clearing the selection
    setTimeout(() => this.filterInput.nativeElement.focus(), 10);
  }
}
