import React from "react";
import PromoBlock from "../../kit/components/promo-block";
import AboutUsCard from "../../kit/components/about-us-card";
import DiamondIcon from './../../kit/shared/images/Diamond.png'
import styles from './style.module.scss'

const HomePage = () => {
    return (
        <div className={styles['promo-block']}>
            <PromoBlock/>
            <div className={styles['main-info']}>
                <AboutUsCard icon={DiamondIcon} title = 'asdfs'>
                    asdasd
                    </AboutUsCard>
                    <AboutUsCard icon={DiamondIcon} title = 'asdfas'>
                        asdasd
                    </AboutUsCard>
                    <AboutUsCard icon={DiamondIcon} title = 'asdfasdf'>
                        asdasd
                    </AboutUsCard>
            </div>
        </div>
)
}

export default HomePage