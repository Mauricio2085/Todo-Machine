import { HiOutlineTrash } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi';

import './TodoIcon.css'

const iconTypes = {
    check: (color) => < HiCheck className='Icon-svg' fill={color}/>,
    delete: (color) => < HiOutlineTrash className='Icon-svg' fill={color}/>
}

const TodoIcon = ({type, color, onClick}) => {
    return (
        <span
            className={`Icon-container Icon-svg Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };