'use strict';

import React from 'react';
import ReactNative from 'react-native';

var {
  Component,
} = React;

var {
  StyleSheet,
  View,
  requireNativeComponent,
    ViewPropTypes
} = ReactNative;
import PropTypes from 'prop-types'

export default class MessageList extends Component {

  constructor(props) {
    super(props);
    this._onMsgClick = this._onMsgClick.bind(this);
    this._onClickLongTapCell = this._onClickLongTapCell.bind(this);
    this._onMsgOpenUrlClick = this._onMsgOpenUrlClick.bind(this);
    this._onDealWithMenuClick = this._onDealWithMenuClick.bind(this);
    this._onAvatarClick = this._onAvatarClick.bind(this);
    this._onStatusViewClick = this._onStatusViewClick.bind(this);    

  }

  _onMsgClick(event: Event) {
    if (!this.props.onMsgClick) {
      return;
    }
    this.props.onMsgClick(event.nativeEvent.message);
  }

    _onClickLongTapCell(event: Event) {
    if (!this.props.onClickLongTapCell) {
      return;
    }
    this.props.onClickLongTapCell(event.nativeEvent.message);
  }

  _onMsgOpenUrlClick(event: Event) {
    if (!this.props.onMsgOpenUrlClick) {
      return;
    }
    this.props.onMsgOpenUrlClick(event.nativeEvent.url);
  }

  _onDealWithMenuClick(event: Event) {
    if (!this.props.onDealWithMenuClick) {
      return;
    }
    this.props.onDealWithMenuClick(event.nativeEvent.message,event.nativeEvent.strMenu);
  }

  _onAvatarClick(event: Event) {
    if (!this.props.onAvatarClick) {
      return;
    }
    this.props.onAvatarClick(event.nativeEvent.message);
  }

  _onStatusViewClick(event: Event) {
    if (!this.props.onStatusViewClick) {
      return;
    }
    this.props.onStatusViewClick(event.nativeEvent.message);
  }

  _onBeginDragMessageList(event: Event) {
    if (!this.props.onBeginDragMessageList) {
      return;
    }
    this.props.onBeginDragMessageList();
  }

    _onClickLoadMessages(event: Event) {
        if (!this.props.onClickLoadMessages) {
            return;
        }
        this.props.onClickLoadMessages();
    }

    _onClickChangeAutoScroll(event:Event){
    	if(!this.props.onClickChangeAutoScroll){
    		return;
    	}
    	this.props.onClickChangeAutoScroll(event.nativeEvent.isAutoScroll);
    }
    _onClickScanImageView(event:Event){
      if(!this.props.onClickScanImageView){
        return;
      }
      this.props.onClickScanImageView(event.nativeEvent);
    }
    _onClickSendValidation(event:Event){
      if(!this.props.onClickSendValidation){
        return;
      }
      this.props.onClickSendValidation();
    }

  render() {
    return (
      <RCTMessageList 
          {...this.props} 
          onMsgClick={this._onMsgClick}
          onClickLongTapCell={this._onClickLongTapCell}
          onAvatarClick={this._onAvatarClick}
          onMsgOpenUrlClick ={this._onMsgOpenUrlClick}
          onDealWithMenuClick={this._onDealWithMenuClick}
          onStatusViewClick={this._onStatusViewClick}
          onClickLoadMessages={this._onClickLoadMessages.bind(this)}
          onClickChangeAutoScroll={this._onClickChangeAutoScroll.bind(this)}
          onClickScanImageView={this._onClickScanImageView.bind(this)}
          onClickSendValidation={this._onClickSendValidation.bind(this)}
      />
    );
  }

}

MessageList.propTypes = {
  initalData:PropTypes.array,
  onMsgClick: PropTypes.func,
  onClickLongTapCell: PropTypes.func,
  onMsgOpenUrlClick: PropTypes.func,
  onDealWithMenuClick: PropTypes.func,
  onAvatarClick: PropTypes.func,
  onStatusViewClick: PropTypes.func,
  onBeginDragMessageList: PropTypes.func,
    onClickLoadMessages:PropTypes.func,
    onClickChangeAutoScroll:PropTypes.func,
    onClickScanImageView:PropTypes.func,
    onClickSendValidation:PropTypes.func,
  sendBubble: PropTypes.string,
  receiveBubble: PropTypes.string,
  sendBubble: PropTypes.object,
  receiveBubble: PropTypes.object,
  sendBubbleTextColor: PropTypes.string,
  receiveBubbleTextColor: PropTypes.string,
  sendBubbleTextSize: PropTypes.number,
  receiveBubbleTextSize: PropTypes.number,
  sendBubblePadding: PropTypes.object,
  receiveBubblePadding: PropTypes.object,
  dateTextSize: PropTypes.number,
  dateTextColor: PropTypes.string,
  avatarSize: PropTypes.object,
  isShowDisplayName: PropTypes.bool,
  isShowIncommingDisplayName: PropTypes.bool,
  isShowOutgoingDisplayName: PropTypes.bool,
  ...ViewPropTypes
};

var RCTMessageList = requireNativeComponent('RCTMessageListView', MessageList);

var styles = StyleSheet.create({

});