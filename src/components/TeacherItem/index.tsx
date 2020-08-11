import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

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
                <a href={`https://wa.me/${teacher.whatsapp}`} target="blank">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Get in touch
                </a>
                
            </footer>
        </article>
    )
}

export default TeacherItem;



