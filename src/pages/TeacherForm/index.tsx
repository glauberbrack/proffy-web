import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm = () => {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function handleAddNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
            <Header
            title="This is AMAZING that you want to give classes"
            description="The first step is fill this form bellow"
            />

            <main>
                <fieldset>
                    <legend>Your data</legend>

                    <Input name="name" label="Fullname" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Bio"/>

                </fieldset>

                <fieldset>
                    <legend>About the Class</legend>

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
                    <Input name="price" label="Price per hour" />
                    
                </fieldset>

                <fieldset>
                    <legend>
                        Available Times
                        <button type="button" onClick={handleAddNewScheduleItem}>
                            + New Time
                        </button>
                    </legend>
                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
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

                                    <Input type="time" name="from" label="From"/>
                                    <Input type="time" name="to" label="To"/>

                                </div>
                            )
                        })}                    
                </fieldset>

                <footer>

                    <p>
                        <img src={warningIcon} alt="Important Warning"/>
                        Important! <br/>
                        Fill all the fields
                    </p>

                    <button type="button">
                        Save
                    </button>

                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;