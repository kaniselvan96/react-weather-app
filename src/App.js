import React, { Component } from 'react'
import axios from "axios"
import Topbar from "./components/Topbar"
import CardView from "./components/CardView"
import ListView from "./components/ListView";
import { Container } from '@material-ui/core'


export default class App extends Component {
    state = {
        data: [],
        id: '',
        location: '',
        title: "Weather App"
    };

    componentDidMount() {
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=malaysia&units=metric&appid=20968064dc0e07848055fa13d43555a1")
            .then(res => {
                console.log("Data List", res.data.list);
                this.setState({
                    data: res.data.list,
                    id: res.data.list[0].dt,
                    location: res.data.city.name
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {/* title bar */}
                <Topbar title={this.state.title} />
                <Container maxWidth="sm">
                    {/* loop each data to list down weather details of each day */}
                    {this.state.data.map(d => {
                        let date = new Date(d.dt_txt)
                        return (
                            this.state.id === d.dt ?
                                // current weather details
                                <CardView
                                    temp={d.main.temp}
                                    location={this.state.location}
                                    date={date}
                                    climate={d.weather[0].main}
                                />
                                :
                                //upcoming weather list
                                <ListView
                                    date={date}
                                    climate={d.weather[0].main}
                                    minTemp={d.main.temp_min}
                                    maxTemp={d.main.temp_max}
                                />
                        )
                    })}
                </Container>

            </div >
        )
    }
}
