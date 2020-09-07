import React, { Component } from 'react';
import UsersGraph from 'components/UsersGraph/UsersGraph';
import MealsGraph from 'components/UsersGraph/MealsGraph/MealsGraph';

class StatisticsPage extends Component {
    render() {
        return (
            <div className="content">
                <UsersGraph/>
                <MealsGraph/>
            </div>
        );
    }
}

export default StatisticsPage;