import React from 'react';

export default class Header extends React.PureComponent {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const action = event.target.id;
        const currentMonth = this.props.currentMonth;
        if (action === 'previous') {
            currentMonth.subtract(1, 'months');
        }
        if (action === 'next') {
            currentMonth.add(1, 'months');
        }
        this.props.onHeaderChange(currentMonth);
    }

    render() {
        return <div className={'columns'}>
                <div className={'column'}>
                    <a className="button is-light" href={'#'} id='previous' onClick={this.onChange}>Previous</a>
                </div>
                <div className={'column'}>{this.props.currentMonth.format('MMMM - YYYY')}</div>
                <div className={'column'}>
                    <a className="button is-light" href={'#'}  id='next' onClick={this.onChange}>Next</a>
                </div>
            </div>;

    }
}