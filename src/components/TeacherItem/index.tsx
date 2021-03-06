import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    subject: string;
    bio: string;
    price: number;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
            
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
            {teacher.bio}
            </p>

            <footer>
                <p>
                    Price per Hour
                    <strong>$ {teacher.price}</strong>
                </p>
                <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="blank">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Get in touch
                </a>
                
            </footer>
        </article>
    )
}

export default TeacherItem;



