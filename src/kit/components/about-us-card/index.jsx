import React from 'react';
import styles from "./style.module.scss";
import styled from 'styled-components'

const StyledIcon = styled.span`
  background: ${props => `url(${props.iconSrc}) center center/contain no-repeat;`}
`

// const StyledIcon = (props) => {
//     return (
//         <span
//             style={{background: `url(${props.iconSrc}) center center/contain no-repeat;`}}
//         />
//     )
// }

const ChangeText = (props) =>  {
    const {
        title,
        text,
        children
    } = props
}
const AboutUsCard = (props) => {
    return (
        <div className={styles['about-us-card']}>
            <StyledIcon className={styles.icon} iconSrc={props.icon}/>
            <h2 className={styles.title}>
                {props.title}
            </h2>
            <p className={styles.description}>
                {props.children}
            </p>
        </div>
    );
};

export default AboutUsCard;