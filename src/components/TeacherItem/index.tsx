import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/34426848?s=460&u=19ac89585cbf6bca9a66136839a2a97997927db9&v=4" alt="Danilo Augusto" />
                <div>
                    <strong>Danilo Augusto</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem purus, faucibus commodo gravida et, aliquam finibus purus.
                        <br /><br />
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quam ipsum, convallis sed facilisis viverra, ultricies quis metus. Ut ac quam a erat sodales gravida. Aenean at hendrerit justo. Vivamus pellentesque sagittis nisl, hendrerit aliquam ipsum ultrices eget. Aliquam vehicula dui eget nisi placerat malesuada. Ut in maximus magna.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;