/* eslint-disable no-unused-vars */
import React from 'react'
import cx from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { togglePriority, toggleUpvote } from '../actions'

import TrackContainer from '../../../components/TrackContainer'
import TrackAdderAvatar from '../../../components/TrackAdderAvatar'
import Avatar from '../../../components/Avatar'
import TrackInfos from '../../../components/TrackInfos'
import TrackDetails from '../../../components/TrackDetails'
import TrackCover from '../../../components/TrackCover'
import TrackSong from '../../../components/TrackSong'
import TrackName from '../../../components/TrackName'
import TrackArtist from '../../../components/TrackArtist'
import TrackActions from '../../../components/TrackActions'
import TrackFooter from '../../../components/TrackFooter'
import TrackPendingTime from '../../../components/TrackPendingTime'
import TrackAdder from '../../../components/TrackAdderName'
import PriorityButton from '../../../components/TrackPriorityButton'
import UpvoteButton from '../../../components/UpvoteButton'
import VotesCount from '../../../components/VotesCount'
import UpvoteIcon from '../../../components/UpvoteIcon'
import PriorityIcon from '../../../components/TrackPriorityIcon'

class TrackListItem extends React.Component {
    handlePriorityClick = () => {
        this.props.togglePriority(this.props.item.id)
    }
    
    handleUpvoteClick = () => {
        this.props.toggleUpvote(this.props.item.id)
    }
    
    _formatTime = (time) => {
        const duration = parseInt(time, 10)
        let hours = Math.floor(duration / 3600)
        let minutes = Math.floor((duration - (hours * 3600)) / 60)
        let seconds = duration - (hours * 3600) - (minutes * 60)
        let result = ''
        
        if (hours > 0) {
            if (hours < 10) {
                hours = '0' + hours
            }
            result += hours + ' h '
        }
        if (minutes > 0) {
            if (minutes < 10) {
                minutes = '0' + minutes
            }
            result += minutes + ' min '
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        
        result += seconds + ' s'
        
        return result
    }
    
    render() {
        const {
            item: track,
        } = this.props
        
        return (
            <TrackContainer
                className={cx({
                    'is-priority': track.priority,
                })}
            >
                <TrackAdderAvatar>
                    <Avatar url={track.adder.pictureUrl}/>
                </TrackAdderAvatar>
                <TrackInfos>
                    <TrackDetails>
                        <TrackCover url={track.pictureUrl}/>
                        <TrackSong>
                            <TrackName>
                                {track.name}
                            </TrackName>
                            <TrackArtist>
                                {track.artist}
                            </TrackArtist>
                        </TrackSong>
                        <TrackActions>
                            <PriorityButton
                                className={cx({
                                    'is-active': track.priority,
                                })}
                                onClick={this.handlePriorityClick}
                            >
                                <PriorityIcon>
                                    <i className="fas fa-list"/>
                                </PriorityIcon>
                            </PriorityButton>
                            <UpvoteButton
                                className={cx({
                                    'is-active': track.votes.userVoted,
                                })}
                                onClick={this.handleUpvoteClick}
                            >
                                <VotesCount>
                                    {track.votes.count}
                                </VotesCount>
                                <UpvoteIcon>
                                    <i className="fas fa-heart"/>
                                </UpvoteIcon>
                            </UpvoteButton>
                        </TrackActions>
                    </TrackDetails>
                    <TrackFooter>
                        <TrackAdder>
                            ajouté par {track.adder.name}
                        </TrackAdder>
                        <TrackPendingTime>
                            dans {this._formatTime(track.duration)}
                        </TrackPendingTime>
                    </TrackFooter>
                </TrackInfos>
            </TrackContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    togglePriority,
    toggleUpvote,
}, dispatch)

export default connect(
    false,
    mapDispatchToProps,
)(TrackListItem)
