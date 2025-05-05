import classNames from 'classnames/bind'
import style from './Comment.module.css'
import RateStars from '../RateStars/RateStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faThumbsUp as likeOutline, faThumbsDown as dislikeOutline, faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as likeSolid, faThumbsDown as dislikeSolid, faHeart as heartSolid, faL } from '@fortawesome/free-solid-svg-icons'

const clx = classNames.bind(style)
export default function Comment() {
    const [like, setLike] = useState(false)
    const [likeClick, setLikeClick] = useState(false)

    const [dislike, setDislike] = useState(false)
    const [dislikeClick, setDislikeClick] = useState(false)

    const [heart, setHeart] = useState(false)
    const [heartClick, setHeartClick] = useState(false)

    const handleLikeClick = () => {
        setLike(!like)
        setDislike(false)
        setHeart(false)
        setLikeClick(true)
        setTimeout(() => setLikeClick(false), 300)
    }

    const handleDislikeClick = () => {
        setDislike(!dislike)
        setLike(false)
        setHeart(false)
        setDislikeClick(true)
        setTimeout(() => setDislikeClick(false), 300)
    }

    const handleHeartClick = () => {
        setHeart(!heart)
        setLike(false)
        setDislike(false)
        setHeartClick(true)
        setTimeout(() => setHeartClick(false), 300)
    }

    return (
        <div className={clx('wrapper')}>
            <div className={clx('content-area')}>
                <div className={clx('cmt-info')}>
                    <div className={clx('avt')}></div>
                    <label className={clx('username')}>Peter Jackson</label>
                    <label className={clx('time')}>5 min</label>
                    <RateStars rate={5.0} />
                </div>
                <div className={clx('content')}>
                    <p className={clx('comment')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className={clx('interact')}>
                    <div className={clx('interact-btn', { clicked: likeClick })} onClick={handleLikeClick}>
                        <FontAwesomeIcon className={clx({ 'blue-violet': like })} icon={like ? likeSolid : likeOutline} />
                        <label className={clx('count', { 'blue-violet': like })}>10</label>
                    </div>
                    <div className={clx('interact-btn', { clicked: dislikeClick })} onClick={handleDislikeClick}>
                        <FontAwesomeIcon className={clx({ 'orange': dislike })} icon={dislike ? dislikeSolid : dislikeOutline} />
                        <label className={clx('count', { 'orange': dislike })}>10</label>
                    </div>
                    <div className={clx('interact-btn', { clicked: heartClick })} onClick={handleHeartClick}>
                        <FontAwesomeIcon className={clx({ 'pink': heart })} icon={heart ? heartSolid : heartOutline} />
                        <label className={clx('count', { 'pink': heart })}>10</label>
                    </div>
                </div>
            </div>
        </div>
    )
}