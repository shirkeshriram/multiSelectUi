import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'multiSelect',
  templateUrl: './multi-select-ui.component.html',
  styleUrls: ['./multi-select-ui.component.css']
})
export class MultiSelectUiComponent implements OnInit {

	@ViewChild('container') container;
	
	@Input() filter: boolean;
	@Input() options: any;
	@Input() filterBy:any;
	dropdownIcon:string = 'triangleDown';
	filteredData:any;
	dropdownVisible:boolean = false;
	@Input() is_checked:boolean = false;
	selectedCountry:any = [];
	buttonText = 'Select Country';
	selectedCount:number = 0;
	
	constructor() {
		document.addEventListener('click', this.offClickHandler.bind(this)); 
	}
	
	ngOnInit(): void {
		this.filteredData = this.options;
		console.log(this.options);
		this.onLoadResultSet();
	}
	
	onLoadResultSet(){
		for(let country of this.options){	
			country.isChecked = false;
			for(let countryVal of this.selectedCountry){
				if(countryVal == country.value){
					country.isChecked = true;
				}
			}
		};
	}
	
	onChange(event,value:string,label:string) {
		let selectedInput = event.target.parentElement.querySelector('input[type="checkbox"]');
		this.dropdownVisible = true;
		if (selectedInput.checked == true) {
			this.selectedCount++;
			this.selectedCountry.push(value);
		}else{
			this.selectedCount--;
			let index = this.selectedCountry.indexOf(value);
			this.selectedCountry.splice(index, 1);
		}
		this.buttonText = this.selectedCount+' Selected countries';
		if(this.selectedCount == 0){
			this.buttonText = 'Select Country';
		}
	}
	
	offClickHandler(event:any) {
        if (!this.container.nativeElement.contains(event.target)) { // check click origin
            this.dropdownVisible = false;
			this.dropdownIcon = 'triangleDown';
        }
    }
	
	onClickInput(event) {
		this.dropdownVisible = true;
		this.dropdownIcon = 'triangleUp';
	}
	
	onSearchChange(searchValue: string){ 
		this.options = this.filteredData;
		if(searchValue == ''){
			return this.options;
		}
		let filterByCondition = this.filterBy.split(',');
		let selectedCountry = this.selectedCountry;
		this.options = this.options.filter(function(element){
			element.isChecked = false;
			for(let countryVal of selectedCountry){
				if(countryVal == element.value){
					element.isChecked = true;
				}
			}
			for(let filterVal of filterByCondition){
				if(filterVal.toLowerCase() == 'value'){
					return element.value.toLowerCase().includes(searchValue.toLowerCase());
				}
				if(filterVal.toLowerCase() == 'label'){
					return element.label.toLowerCase().includes(searchValue.toLowerCase());
				}
			};
		});
	}

}
