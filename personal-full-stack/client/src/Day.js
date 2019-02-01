
import dateFns from 'date-fns';

import React, { Component } from 'react'

import "./Day.css"


export default class Day extends Component {
    state = {
        selectedHour: 1,
        currentDay: new Date(this.props.match.params.date)
    };

    renderHeader() {
        const dateFormat = "MMMM DD";

        return (
            <div className="headerr roww flex-middle">
                <div className="coll coll-start">
                    <div className="iconn" onClick={this.prevDay}>
                        chevron_left
              </div>
                </div>
                <div className="coll coll-center">
                    <span>{dateFns.format(this.state.currentDay, dateFormat)}</span>
                </div>
                <div className="coll coll-end" onClick={this.nextDay}>
                    <div className="iconn">chevron_right</div>
                </div>
            </div>
        );
    }

    renderRows() {
        const { currentDay, selectedHour } = this.state;
        const dayStart = dateFns.startOfDay(currentDay);
        const dayEnd = dateFns.endOfDay(dayStart);
        const startHour = dateFns.setHours(dayStart, 9)
        const endHour = dateFns.setHours(currentDay, 17);

        const hourFormat = "H:00a";
        const rows = [];

        let hours = [];
        let hour = startHour;
        let formattedHour = "";

        while (hour <= endHour) {
            formattedHour = dateFns.format(hour, hourFormat);
            const cloneHour = hour;
            if(new Date(hour).getHours() === 12) {
                hour = dateFns.addHours(hour, 1);
                continue;
            }
            hours.push(
                <div
                    className={`coll celll ${
                        !dateFns.isSameDay(hour, dayStart)
                            ? "disabledd"
                            : dateFns.isSameHour(hour, selectedHour) ? "selectedd" : ""
                        }`}
                    key={hour}
                    onClick={() => this.onHourClick(dateFns.parse(cloneHour))}
                >
                    <span className="numberr">{formattedHour}</span>
                    <span className="bgg">{formattedHour}</span>
                </div>
            );
            hour = dateFns.addHours(hour, 1);
        }
        rows.push(
            <div className="roww" key={hour}>
                {hours}
            </div>
        );
        hours = [];
        return <div className="bodyy">{rows}</div>

    }

    onHourClick = hour => {
        this.setState({
            selectedHour: hour
        });
    };

    nextDay = () => {
        this.setState({
            currentDay: dateFns.addDays(this.state.currentDay, 1)
        });
    };

    prevDay = () => {
        this.setState({
            currentDay: dateFns.subDays(this.state.currentDay, 1)
        });
    };

    render() {
        return (
            <div className="bodywrapperr">
                <div className="calendarr">
                    {this.renderHeader()}
                    {this.renderRows()}
                </div>
            </div>
        )
    }
}
