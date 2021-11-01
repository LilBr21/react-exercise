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
                    <div className="card-medals">
                        <p className="medal-quant">{bronze}</p>
                        <p className="medal-type">Bronze</p>
                    </div>
                    <div className="card-medals">
                        <p className="medal-quant">{silver}</p>
                        <p className="medal-type">Silver</p>
                    </div>
                    <div className="card-medals">
                        <p className="medal-quant">{gold}</p>
                        <p className="medal-type">Gold</p>
                    </div>
                </div>
             </div>
         </div>
     )
}

export default Card;