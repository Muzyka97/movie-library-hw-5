import styles from './trends-list.module.css';

import { Link } from 'react-router-dom';

const TrendsList =({items}) =>{
    const elements = items.map(({title, id}) => (
        <Link to={`/movies/${id}`} className={styles.link}>
        <li  key={id} >
            <h2>{title}</h2>
        </li>
        </Link>
    ))

    return(
        <ul >
            {elements}
        </ul>
    )
}
export default TrendsList;
