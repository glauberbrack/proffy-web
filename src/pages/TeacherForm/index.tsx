import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

const TeacherForm = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    
    const [subject, setSubject] = useState('');
    const [price, setPrice] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function handleAddNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    };

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            price: Number(price),
            schedule: scheduleItems
        }).then(() => {
            alert('Everything went just perfect!');
            history.push('/')
        }).catch(() => {
            alert('Something went wrong');
        })

    };

    return (
        <div id="page-teacher-form" className="container">
            <Header
            title="This is AMAZING that you want to give classes"
            description="The first step is fill this form bellow"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your data</legend>

                        <Input name="name" label="Fullname" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                        <Textarea name="bio" label="Bio" value={bio} onChange={(e) => { setBio(e.target.value) }}/>

                    </fieldset>

                    <fieldset>
                        <legend>About the Class</legend>

                        <Select
                        name="subject"
                        label="Subject"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
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
                        <Input name="price" label="Price per hour ($)"  value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            Available Times
                            <button type="button" onClick={handleAddNewScheduleItem}>
                                + New Time
                            </button>
                        </legend>
                            {scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="Week Day"
                                            value={scheduleItem.week_day}
                                            onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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

                                        <Input  type="time" name="from" label="From" value={scheduleItem.from} onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}/>
                                        <Input type="time" name="to" label="To" value={scheduleItem.to} onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}/>

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

                        <button type="submit">
                            Save
                        </button>

                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;