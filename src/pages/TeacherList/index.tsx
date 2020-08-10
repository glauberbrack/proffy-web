import React from 'react';

import Header from '../../components/Header';

import './styles.css';

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Look at those amazing Proffys available!">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Week Day</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hour</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </Header>
        </div>
    )
}

export default TeacherList;