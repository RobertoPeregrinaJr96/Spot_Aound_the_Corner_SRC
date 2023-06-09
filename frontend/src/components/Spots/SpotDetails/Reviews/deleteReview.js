import { useModal } from '../../../../context/Modal'
import { useDispatch, useSelector } from 'react-redux'

import { deleteReviewThunk, fetchReviewThunk } from '../../../../store/reviewsReducer'
import { useEffect } from 'react'
import './index.css'
const DeleteReviewModal = ({ spotId, reviewObj }) => {
    const user = useSelector(state => state.session.user)
    console.log('reviewObj in DeleteReviewModal', reviewObj)
    const reviews = /*Object.values(reviewObj)*/[reviewObj]
    console.log('reviews in DeleteReviewModal', reviews)
    const userReview = reviews.find(review => review.userId === user.id)
    console.log('userReview in DeleteReviewModal', userReview)


    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(deleteReviewThunk(Number(userReview.id))).then(closeModal)
    }

    const closeModalSubmit = (e) => {
        e.preventDefault();
        return closeModal()
    }

    useEffect(() => {
        dispatch(fetchReviewThunk())
    }, [dispatch, Object.values(reviewObj).length])

    // console.log("Hello World in deleteReview")
    return (
        <div className='delete-Modal-div'>
            <form className="delete-form-block" onSubmit={handleSubmit}>
                <h1 className='delete-header'>Confirm Delete</h1>
                <p className='delete-p'>Are you sure you want to delete this review?   </p>
                <div className='button-div'>
                    <button type="submit" onClick={handleSubmit} className='yeah-delete'>Yes (Delete Review)</button>
                    <button onClick={closeModalSubmit} className='dont-delete'>No (Keep Review)</button>

                </div>
            </form>
        </div>
    )
}

export default DeleteReviewModal;
