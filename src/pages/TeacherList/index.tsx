import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import './styles.css';
import api from '../../services/api';

const TeacherList = () => {
    const [subject, setSubject] = useState('');
    const [week_day, setyWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    function handleSearchTeachers(e: FormEvent) {
        e.preventDefault();

        api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then((response) => {
            setTeachers(response.data)
        })
        
    }
    return (

        <div id="page-teacher-list" className="container">
            <Header title="Look at those amazing Proffys available!">
                <form id="search-teachers" onSubmit={handleSearchTeachers}>
                <Select
                    name="subject"
                    label="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                        value={week_day}
                        onChange={(e) => setyWeekDay(e.target.value)}
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

                    <Input 
                    type="time"
                    name="time"
                    label="Hour"
                    value={time}
                    onChange={(e) => {setTime(e.target.value)}}
                    />

                    <button type="submit">Search</button>
                </form>
            </Header>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher}/>
                    )
                })}
                
            </main>
        </div>
    )
}

export default TeacherList;