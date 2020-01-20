import React, { Component } from 'react';
import jsonp from 'jsonp';

const Cpp08NexEventURL = "https://api.meetup.com/swedencpp/events?&sign=true&photo-host=public&scroll=next_upcoming&page=1&status=upcoming";

export default class Cpp08 extends Component {
    constructor(props) {
        super(props);
        this.state = { eventdata: {} };
    }

    componentDidMount() {
        jsonp(Cpp08NexEventURL, null, (error, data) => {
            if (error) {
                console.error(error.message);
                this.setState({ error });
            } else {
                console.log(data);
                this.setState({ eventdata: data.data[0] });
            }
        });
    }

    render() {
        const eventdata = this.state.eventdata;
        return (
            <div className="container">
                <h2 className="comingevents">Upcoming events in Stockholm</h2>
                <h3 className="eventtitle">{eventdata.name}</h3>
                <p className="eventdatetime">{eventdata.local_date} {eventdata.local_time}</p>
            </div>
        );
    }
}
