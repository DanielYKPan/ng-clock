import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { ClockComponent } from './clock/clock.component';

@NgModule({
    declarations: [
        AppComponent,
        ClockComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // Materials
        MatIconModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
