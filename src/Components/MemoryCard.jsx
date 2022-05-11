import { props } from 'bluebird'
import React from 'react'
import './MemoryCard.css'
class MemoryCard extends React.Component{
    constructor(props){
        super (props);
        this.state = {itFlipped:false};
    }
    clickHandler = () => {
        this.setState(
            {isFlipped:true}
        );
    }
    render() {
        return(
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <div>
                            <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt='logo'></img>
                        </div>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}
export default MemoryCard;









