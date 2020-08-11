import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Look at those amazing Proffys available!">
                <form id="search-teachers">
                    <Input name="subject" label="Subject" />
                    <Input name="week_day" label="Week Day" />
                    <Input type="time" name="time" label="Hour" />
                </form>
            </Header>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;