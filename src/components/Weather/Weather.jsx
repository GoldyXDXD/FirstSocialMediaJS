import s from './Weather.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLocationDot, faMagnifyingGlass, faWater, faWind} from "@fortawesome/free-solid-svg-icons";
import img404 from './images/not_found_404.png'

library.add(
    faLocationDot,
    faMagnifyingGlass,
    faWater,
    faWind
)

const Weather = (props) => {
    return (
        <div className={s.weather_app}>
            <div className={s.search_box}>
                <i>
                    <FontAwesomeIcon icon={['fas', 'fa-location-dot']}/>
                </i>
                <input type="text" placeholder="Enter your location"/>
                <button className={s.fa_solid + ' ' + s.fa_magnifying_glass}>
                    <FontAwesomeIcon icon={['fas', 'fa-magnifying-glass']} />
                </button>
            </div>
            <div className={s.not_found}>
                <img src={img404}></img>
                <p>Nah, invalid location</p>
            </div>
            <div className={s.weather_box}>
                <img src=""/>
                <p className={s.temperature}></p>
                <p className={s.weather_box_description}></p>
            </div>
            <div className={s.weather_details}>
                <div className={s.humidity}>
                    <i>
                        <FontAwesomeIcon icon={['fas', 'fa-water']} />
                    </i>
                    <div className={s.text}>
                        <span></span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className={s.wind}>
                    <i>
                        <FontAwesomeIcon icon={['fas', 'fa-wind']} />
                    </i>
                    <div className={s.text}>
                        <span></span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;