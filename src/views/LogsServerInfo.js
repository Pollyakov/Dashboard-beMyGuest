import React, { Component } from 'react';
import CardsGallery from 'components/CardsGallery/CardsGallery';
import LogsCard from 'components/Cards/LogsCard';

class LogsServerInfo extends Component {
    render() {
        return (
            <div className="content">
                <CardsGallery/>
                <LogsCard/>
            </div>

        );
    }
}

export default LogsServerInfo;