import React from 'react';
import Day from './Day';
import moment from 'moment';

/**
 * Month View
 */
export default class MonthView extends React.PureComponent {
    renderMonth() {
        let { currentMonth: startOfCurrentMonth } = this.props;
        const startOfCalendar = moment(startOfCurrentMonth).startOf('week');
        const lastDayOfCalendar = moment(startOfCurrentMonth.endOf('month')).endOf('week');
        const weeks = [];
        for (; startOfCalendar.isSameOrBefore(lastDayOfCalendar); startOfCalendar.add(1, 'weeks')) {
            weeks.push(this.renderWeek(startOfCalendar));
        }
        return weeks;
    }

    renderWeek(startOfWeek) {
        const startOfWeekClone = moment(startOfWeek);
        const endOfWeek = moment(startOfWeek).endOf('week');
        const days = [];
        for (; startOfWeekClone.isSameOrBefore(endOfWeek); startOfWeekClone.add(1, 'days')) {
            days.push(<Day>{startOfWeekClone.date()}</Day>);
        }
        return <div className={"week columns is-variable is-1"}>
            {days}
        </div>
    }

    render() {
        return <div className={"calendar"}>
            {this.renderMonth()}
        </div>;
    }
}