import { Component , Input , Output, EventEmitter } from '@angular/core';

@Component(
{
    selector: 'app-gridui',
    templateUrl: '../UI/Grid.html',
    styleUrls: ['../UI/Customer.css']
})
export class GridComponent {

@Output()Selected: EventEmitter<object> = new EventEmitter<object>();
// The Grid component will receive a Collection object
gridColumns: Array<object> = new Array<object>();
// Inputs
gridData: Array<object> = new Array<object>();
@Input()EntityName: String = '';

// Need a method so that it can be used by other components
  @Input('grid-data')
  set gridDataSet(_gridData: Array<object>) {
    // From the data need to figure out the column names
     if (_gridData.length > 0 ) {
        // Object.Keys[object] is used to figure out the column names. Gives out the properties of the 
        // objects
       // tslint:disable-next-line:prefer-const
       if (this.gridColumns.length === 0) {
       const columnNames: String [] = Object.keys(_gridData[0]);
        this.gridColumns = new Array<object>();
        for (const index in columnNames) {
          if (columnNames.hasOwnProperty(index)) {
            this.gridColumns.push(columnNames[index]);
        }
        }
      }
        this.gridData = _gridData;

     }
  }

  Select(_Selected: object) {
    this.Selected.emit(_Selected);
  }

}
