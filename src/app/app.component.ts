import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    get clock$(): Observable<Date> {
        return this.appService.clock;
    }

    constructor( private appService: AppService ) {
    }

    public ngOnInit(): void {
        this.appService.runClock();
    }
}
