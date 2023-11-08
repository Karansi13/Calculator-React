import Styles from './Display.module.css'

const Display = ({ calval }) => {
    return (
        <input className={Styles.display} type="text"  value={calval} readOnly />
    )
}

export default Display;