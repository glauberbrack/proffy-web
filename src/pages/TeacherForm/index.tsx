import React from 'react';

import Header from '../../components/Header';

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

                    <div className="input-block">
                        <label htmlFor="name">Fullname</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" id="name"/>
                    </div>

                </fieldset>
            </main>
        </div>
    )
}

export default TeacherForm;