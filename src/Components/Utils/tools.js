import React from 'react';

import { Link } from 'react-router-dom';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
    const template = <div
        className="img_cover"
        style={{
            width: props.width ? props.width : '70px',
            height: props.height ? props.height: '70px',
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>

    if(props.link){
        return (
            <Link className="link_logo" to={props.linkTo}>
                {template}
            </Link>
        )
    } else {
        return template
    }

}