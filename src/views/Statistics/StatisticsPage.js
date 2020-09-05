import React, { Component } from 'react';
import UsersGraph from 'components/UsersGraph/UsersGraph';

class StatisticsPage extends Component {
    render() {
        return (
            <div className="content">
                <UsersGraph/>
            </div>
        );
    }
}

export default StatisticsPage;