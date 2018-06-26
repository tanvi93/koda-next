import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatDialogModule,
        MatGridListModule,
        MatTooltipModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatListModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        FlexLayoutModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatDialogModule,
        MatGridListModule,
        MatTooltipModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatListModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        FlexLayoutModule
    ]
})
export class MaterialModule { }