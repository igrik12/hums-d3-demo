import React, { Component } from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react'

export default class HumsHeader extends Component {
    render() {
        return (
            <div style={{ background: "#0687BD"}}>
                <Header inverted as='h3' icon textAlign='center'>
                    <Icon name='wheelchair' circular />
                    <Header.Content>
                        Hums Monitoring
                </Header.Content>
                    <Divider style={{background:"#9BD8FB"}}/>
                </Header>
            </div>
        )
    }
}