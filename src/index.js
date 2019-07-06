import React, {Component} from 'react'

import Header from "./Header";
import MonthView from "./MonthView";
import moment from "moment";
import './App.scss';

export default class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentMonth : moment().startOf('month')
        };
        this.onHeaderChange = this.onHeaderChange.bind(this);
    }
    onHeaderChange(currentMonth) {
        this.setState( { currentMonth: moment(currentMonth).startOf('month') } );
    }

    render() {
        return <div>
            <Header currentMonth={this.state.currentMonth} onHeaderChange={this.onHeaderChange}/>
            <MonthView currentMonth={this.state.currentMonth}/>
        </div>;
    }
}
