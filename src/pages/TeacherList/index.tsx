import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Look at those amazing Proffys available!">
                <form id="search-teachers">
                <Select
                    name="subject"
                    label="Subject"
                    options={[
                        {value: 'Arts', label: 'Arts'},
                        {value: 'Biology', label: 'Biology'},
                        {value: 'Sciences', label: 'Sciences'},
                        {value: 'Physical Education', label: 'Physical Education'},
                        {value: 'Physics', label: 'Physics'},
                        {value: 'Chemistry', label: 'Chemistry'},
                        {value: 'Portuguese', label: 'Portuguese'},
                    ]}
                />

                <Select
                    name="week_day"
                    label="Week Day"
                    options={[
                        {value: '0', label: 'Sunday'},
                        {value: '1', label: 'Monday'},
                        {value: '2', label: 'Tuesday'},
                        {value: '3', label: 'Wednesday'},
                        {value: '4', label: 'Thursday'},
                        {value: '5', label: 'Friday'},
                        {value: '6', label: 'Saturday'},
                    ]}
                />
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