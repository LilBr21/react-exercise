import { useState, useEffect } from 'react';

import './card.styles.scss';

const Card = ({
name,
surname,
avatar,
background,
bronze,
silver,
gold
}) => {
    const [bronzeMedalIsShown, setBronzeMedalIsShown] = useState(true);
    const [silverMedalIsShown, setSilverMedalIsShown] = useState(true);
    const [goldMedalIsShown, setGoldMedalIsShown] = useState(true);

    let checkIfHasMedals = (bronze, silver, gold) => {
        if (bronze === 0) {
            setBronzeMedalIsShown(false);
        }
        if (silver === 0) {
            setSilverMedalIsShown(false);
        }
        if (gold === 0) {
            setGoldMedalIsShown(false);
        }
    }

    useEffect(() => {
        checkIfHasMedals(bronze, silver, gold);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

     return (
         <div className="card-container">
             <div className="card-top-part" style={{backgroundImage: `url(${background})`}}>
                <h2 className="card-name">{name} {surname}</h2>
                <div className="card-avatar-container">
                    <img className="card-avatar" src={avatar} alt="avatar"/>
                </div>
             </div>
             <hr className="card-line" />
             <div className="card-bottom-part">
                <h2>Rewards</h2>
                <div className="medals-container">
                    {bronzeMedalIsShown && 
                    <div className="card-medals">
                        <p className="medal-quant">{bronze}</p>
                        <p className="medal-type">Bronze</p>
                    </div>}
                    {silverMedalIsShown &&
                    <div className="card-medals">
                        <p className="medal-quant">{silver}</p>
                        <p className="medal-type">Silver</p>
                    </div>}
                    {goldMedalIsShown &&
                    <div className="card-medals">
                        <p className="medal-quant">{gold}</p>
                        <p className="medal-type">Gold</p>
                    </div>}
                </div>
             </div>
         </div>
     )
}

export default Card;