import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';

@NgModule({
    imports :[
        FormsModule
    ],
    declarations:[
        FilterUserByNamePipe
    ],
    exports: [
        FilterUserByNamePipe
    ],
    providers: [
        
    ]
})
export class SharedModule {
}
