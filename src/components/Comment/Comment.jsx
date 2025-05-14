import classNames from 'classnames/bind'
import style from './Comment.module.css'
import RateStars from '../RateStars/RateStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faThumbsUp as likeOutline, faThumbsDown as dislikeOutline, faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as likeSolid, faThumbsDown as dislikeSolid, faHeart as heartSolid, faL } from '@fortawesome/free-solid-svg-icons'
import foxAvatar from '../../assets/default_avt.jpg'

const clx = classNames.bind(style)
export default function Comment({ myComment, fname, lname, avatarUrl, rating }) {
    const [like, setLike] = useState(false)
    const [likeClick, setLikeClick] = useState(false)

    const [dislike, setDislike] = useState(false)
    const [dislikeClick, setDislikeClick] = useState(false)

    const [heart, setHeart] = useState(false)
    const [heartClick, setHeartClick] = useState(false)

    const handleLikeClick = () => {
        if (myComment) return
        setLike(!like)
        setDislike(false)
        setHeart(false)
        setLikeClick(true)
        setTimeout(() => setLikeClick(false), 300)
    }

    const handleDislikeClick = () => {
        if (myComment) return
        setDislike(!dislike)
        setLike(false)
        setHeart(false)
        setDislikeClick(true)
        setTimeout(() => setDislikeClick(false), 300)
    }

    const handleHeartClick = () => {
        if (myComment) return
        setHeart(!heart)
        setLike(false)
        setDislike(false)
        setHeartClick(true)
        setTimeout(() => setHeartClick(false), 300)
    }

    const formattedDate = (value) => {
        const now = new Date()
        const raw = "2025-05-10T09:21:50.264489";
        const cleaned = raw.slice(0, 23); 
        const date = new Date(cleaned);

        const duration = now - date;

        const unitMap = new Map()
        unitMap.set(0, 'y')
        unitMap.set(1, 'M')
        unitMap.set(2, 'd')
        unitMap.set(3, 'h')
        unitMap.set(4, 'm')
        unitMap.set(5, 's')

        const units = [365 * 30 * 86400 * 1000, 30 * 86400 * 1000, 86400 * 1000, 3600 * 1000, 60 * 1000, 1000]

        for (const [index, value] of units.entries()) {
            var t = Math.floor((duration / value))
            var u = unitMap.get(index)
            if (t > 1) return `${t}${u} ago`
        }
    }

    if (!rating) return (<div></div>)

    return (
        <div className={clx('wrapper')}>
            <div className={clx('content-area')}>
                <div className={clx('cmt-info')}>
                    <div className={clx('avt')}>
                        <img src={avatarUrl ? avatarUrl : foxAvatar} />
                    </div>
                    <label className={clx('username')}>{`${fname} ${lname}`}</label>
                    <label className={clx('time')}>{formattedDate(rating.createdAt)}</label>
                    <RateStars rate={rating.rate} />
                </div>
                <div className={clx('content')}>
                    <p className={clx('comment')}>
                        {rating.comment}
                    </p>
                </div>
                <div className={clx('interact')}>
                    <div className={clx('interact-btn', { clicked: likeClick })} onClick={handleLikeClick}>
                        <FontAwesomeIcon className={clx({ 'blue-violet': like || myComment })} icon={like || myComment ? likeSolid : likeOutline} />
                        <label className={clx('count', { 'blue-violet': like || myComment })}>{rating.likes}</label>
                    </div>
                    <div className={clx('interact-btn', { clicked: dislikeClick })} onClick={handleDislikeClick}>
                        <FontAwesomeIcon className={clx({ 'orange': dislike || myComment })} icon={dislike || myComment ? dislikeSolid : dislikeOutline} />
                        <label className={clx('count', { 'orange': dislike || myComment })}>{rating.dislikes}</label>
                    </div>
                    <div className={clx('interact-btn', { clicked: heartClick })} onClick={handleHeartClick}>
                        <FontAwesomeIcon className={clx({ 'pink': heart || myComment })} icon={heart || myComment ? heartSolid : heartOutline} />
                        <label className={clx('count', { 'pink': heart || myComment })}>{rating.loves}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}