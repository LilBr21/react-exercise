import './card.styles.scss';

const Card = () => {
     return (
         <div className="card-container">
             <div className="card-top-part">
                <h2 className="card-name">Name Surname</h2>
                <div className="card-avatar-container">
                    <p className="avatar-image">Avatar</p>
                </div>
             </div>
             <hr className="card-line" />
             <div className="card-bottom-part">
                <h2>Rewards</h2>
                <div className="medals-container">
                    <div className="card-medals">
                        <p className="medal-quant">1</p>
                        <p className="medal-type">Bronze</p>
                    </div>
                    <div className="card-medals">
                        <p className="medal-quant">3</p>
                        <p className="medal-type">Silver</p>
                    </div>
                    <div className="card-medals">
                        <p className="medal-quant">1</p>
                        <p className="medal-type">Gold</p>
                    </div>
                </div>
             </div>
         </div>
     )
}

export default Card;