import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm = () => {
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

                </fieldset>

                <fieldset>
                    <legend>About the Class</legend>

                    <Input name="subject" label="Subject" />
                    <Input name="price" label="Price per hour" />
                    <Textarea name="bio" label="Bio"/>

                </fieldset>

                <footer>

                    <p>
                        <img src={warningIcon} alt="Important Warning"/>
                        Important! <br/>
                        Fill all teh fields
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