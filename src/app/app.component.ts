import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { Alarm } from './store/alarm-model';
import * as fromRoot from './store';
import * as fromAlarmActions from './store/alarm-actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

    public alarms$: Observable<Alarm[]>;

    get clock$(): Observable<Date> {
        return this.appService.clock;
    }

    constructor( private appService: AppService,
                 private store: Store<fromRoot.State> ) {
    }

    public ngOnInit(): void {
        this.appService.runClock();
        this.alarms$ = this.store.pipe(select(fromRoot.getAlarms));
    }

    public handleAlarmAdd( alarmValue: Date ) {
        this.store.dispatch(new fromAlarmActions.AddAlarm(alarmValue));
    }

    public handleAlarmCancel( alarm: Alarm ) {
        this.store.dispatch(new fromAlarmActions.RemoveAlarm(alarm.id));
    }
}
