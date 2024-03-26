import './Collapse.css'
import chevron from '../../assets/chevron.svg'
import { useState } from 'react'

const Collapse = ({ title, content }) => {
    const [toggle, setToggle] = useState(true)

    function ToggleCollapse() {
        setToggle(!toggle)
    }

    return (
        <li className="collapse">
            <div className="collapse-banner" onClick={ToggleCollapse}>
                <div className="collapse-title">{title}</div>
                <img
                    src={chevron}
                    alt=""
                    className={`collapse-chevron ${toggle ? 'collapsed' : ''}`}
                />
            </div>
            {!toggle && (
                <div
                    className={`collapse-content ${toggle ? 'collapsed' : ''}`}
                >
                    {content}
                </div>
            )}
        </li>
    )
}

export default Collapse
