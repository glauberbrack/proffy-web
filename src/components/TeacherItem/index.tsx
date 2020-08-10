import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/57924169?s=460&u=18511518353cce8f19adf37e6b8098e71e0b5faf&v=4" alt="Glauber Brack"/>
            
                <div>
                    <strong>Glauber Brack</strong>
                    <span>Chemistry</span>
                </div>
            </header>

            <p>
            Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Delegadis gente finis, bibendum egestas augue arcu ut est. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
            </p>

            <footer>
                <p>
                    Price per Hour
                    <strong>$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Get in touch
                </button>
                
            </footer>
        </article>
    )

}

export default TeacherItem;



