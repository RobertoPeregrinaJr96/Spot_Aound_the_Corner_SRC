import CurrentSpotItems from "./currentSpotItem"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { fetchSpotsThunk } from '../../../store/spotReducer';
import './index.css'
const CurrentSpot = () => {
    const history = useHistory()
    // console.log("Current Spot")
    const dispatch = useDispatch()
    // console.log("SPOT INDEX")
    const userObj = useSelector(state => state.session.user)
    // console.log('userObj ====>', userObj)
    const spotsObj = useSelector(state => state.spots.allSpots)
    // console.log('spotsObj: ', spotsObj)
    const spots = Object.values(spotsObj)
    // console.log("Spots : ", spots)
    const userSpots = spots.filter(spot => spot.ownerId === userObj.id)
    // console.log('userSpots ===>', userSpots)

    useEffect(() => {
        dispatch(fetchSpotsThunk())
    }, [dispatch])

    const newSpot = (e) => {
        e.preventDefault();
        history.push(`/spots/new`)
    }

    return (
        <div className="manage-container">
            <h1>Manage Your Spots</h1>
            <button onClick={newSpot}>Create a New Spot</button>
            <ul className="current-ul">
                {userSpots.map((spot) => {
                    return <CurrentSpotItems
                        spot={spot}
                        key={spot.id} />
                })}
            </ul>
        </div>
    )
}


export default CurrentSpot
