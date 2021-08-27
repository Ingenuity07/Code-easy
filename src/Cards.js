import { Link } from 'react-router-dom';

import img1 from '../src/images/frontend.jpeg'
const Cards = ({ data, title }) => {

    console.log(img1)

    return (
        <div>
            <h1 style={{ margin: "1rem", color: "white" }} >{title}</h1>
            <div className="cards cards-crds">
                {
                    data.map(element => (

                        <div>
                            <Link to={`/resources/${element.id}`}>
                                <div className="card card-crds" >
                                <img src={element.src} className="card-img-top" alt="hb" />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <div>{element.details.map(dat=>(
                                            <div>
                                                {dat.detail}
                                            </div>
                                        ))}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>);
}

export default Cards;