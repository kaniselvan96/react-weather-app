import React, { Component } from 'react'
import {
    List,
    ListItem,
    ListItemText,
    Divider
}
    from '@material-ui/core'

export default class ListView extends Component {
    render() {
        return (
            <List component="nav" aria-label="mailbox folders" >
                <ListItem>
                    {/* DateTime and climate details */}
                    <ListItemText
                        primary={new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(this.props.date)}
                        secondary={this.props.climate} xs={8}>
                    </ListItemText>
                    {/* min and max temp range */}
                    <ListItemText xs={4} align="right">
                        {this.props.minTemp.toFixed(1)}&deg;C - {this.props.maxTemp.toFixed(1)}&deg;C
            </ListItemText>
                </ListItem>
                <Divider />
            </List>
        )
    }
}
