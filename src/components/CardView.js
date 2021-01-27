import React, { Component } from 'react'
import {
    Box,
    Paper,
    Typography
}
    from '@material-ui/core'

export default class CardView extends Component {
    render() {
        return (
            <Box display="flex" justifyContent="center" m={2}>
                <Paper>
                    <Box display="flex" flexDirection="row" p={2} m={1}>
                        {/* current temperature */}
                        <Box p={1}>
                            <Typography variant="h2" align="center">
                                {this.props.temp}&deg;C
                            </Typography>
                        </Box>
                        {/* current location, DateTime, climate*/}
                        <Box p={1}>
                            <Typography variant="h6">
                                {this.props.location}
                                <br />
                                {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', hour12: true }).format(this.props.date)}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" >
                                {this.props.climate}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box >
        )
    }
}

