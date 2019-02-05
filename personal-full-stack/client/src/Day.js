import dateFns from 'date-fns';
import { matchLessonTime } from './lib'

import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { withLessonContext } from './LessonProvider';

import "./Day.css"


class Day extends Component {
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
        const startHour = dateFns.setHours(dayStart, 7)
        const endHour = dateFns.setHours(currentDay, 17);

        const hourFormat = "H:00a";
        const rows = [];

        let hours = [];
        let hour = startHour;
        let formattedHour = "";

        while (hour <= endHour) {
            formattedHour = dateFns.format(hour, hourFormat);
            const cloneHour = hour;
            if (new Date(hour).getHours() === 12) {
                hour = dateFns.addHours(hour, 1);
                continue;
            }
            // we know what the hour is
            // we have access to the lessons
            const scheduledLesson = this.props.lessons.find(matchLessonTime(hour))
            hours.push(
                <Link
                    to={{
                        pathname: `/hour/${hour}`,
                        state: { scheduledLesson }
                    }}
                    className={`coll celll ${
                        !dateFns.isSameDay(hour, dayStart)
                            ? "disabledd"
                            : dateFns.isSameHour(hour, selectedHour) ? "selectedd" : ""
                        }`}
                    key={hour}
                    onClick={() => this.onHourClick(dateFns.parse(cloneHour))}>
                    <div>
                        <p>{scheduledLesson && (scheduledLesson.fName + ' ' + scheduledLesson.lName)}</p>
                        <span className="numberr">{formattedHour}</span>
                        <span className="bgg">{formattedHour}</span>
                    </div>
                </Link>
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

export default withLessonContext(Day)