import { FaReact } from 'react-icons/fa';
import { IoIosLink } from 'react-icons/io';

export default function CourseCard({ title, desc, keywords, url }) {
    const renderedTags = keywords.map(tag => (<li key={tag} className='card__tag'>{tag}</li>));
    
    return (
        <div className='card__container'>
            <div className='card__socials'>
                <FaReact size={'40px'} color='#00D8FF'/>
                <a href={url}>
                    <IoIosLink size={'32px'} color='#53687e'/>
                </a>
            </div>
            <h2 className='card__title'>{title}</h2>
            <p className='card__desc'>{desc}</p>
            <ul className='card__tags'>{renderedTags}</ul>
        </div>
    )
}

