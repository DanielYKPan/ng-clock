import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material';
import { ClockComponent } from './clock/clock.component';
import { AlarmInputComponent } from './alarm-input/alarm-input.component';
import { OWL_DATE_TIME_FORMATS, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const MY_NATIVE_FORMATS = {
    fullPickerInput: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    },
    datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
    timePickerInput: {hour: 'numeric', minute: 'numeric', second: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
};

@NgModule({
    declarations: [
        AppComponent,
        ClockComponent,
        AlarmInputComponent,
    ],
    imports: [
        // Angular
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        // OwlDateTime Picker
        OwlDateTimeModule,
        OwlNativeDateTimeModule,

        // Materials
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    providers: [
        {provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
