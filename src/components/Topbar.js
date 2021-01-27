import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h6">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
