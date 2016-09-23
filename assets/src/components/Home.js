import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';

import CommentList from './CommentList';
import commentStore from '../stores/commentStore';

class HomePage extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  banner() {
    const styles = {
      root: {
        backgroundColor: cyan500,
        overflow: 'hidden',
        marginTop: -64
      },
      headBox: {
        position: 'relative',
      },
      bannerBackground: {
        opacity: 1,
        backgroundImage: 'url("/static/images/music.jpg")',
        backgroundPosition: 'center 41px',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'opacity 200ms ease-in-out'
      },
      mask: {
        position: 'absolute',
        height: 100,
        width: '100%',
        background: 'url(/static/images/head_top_mask.png) repeat-x'
      },
      banner: {
        position: 'relative',
        margin: '0 auto',
        height: 480,
        overflow: 'hidden'
      },
      title: {
        margin: '150px auto 40px',
        width: 540,
        height: 54
      },
      searchBox: {
        textAlign: 'center'
      },
      searchForm: {
        display: 'inline-block',
        position: 'relative'
      },
      query: {
        margin: '0 auto',
        padding: '0 10px',
        width: 536,
        height: 34,
        border: '1px solid rgba(255,255,255,.8)',
        borderRadius: 2,
        color: '#fff',
        background: 'rgba(0,0,0,.15)'
      },
      go: {
        position: 'absolute',
        display: 'block',
        top: 0,
        right: 0,
        width: 40,
        height: 36,
        background: 'url(/static/images/icon_search.svg) 9px 7px no-repeat',
        cursor: 'pointer'
      },
      searchHint: {
        position: 'absolute',
        boxSizing: 'border-box',
        fontSize: 16,
        background: '#fff',
        boxShadow: '0 0 2px rgba(0,0,0,.2)',
        zIndex: 999999999999,
        minWidth: 558,
        left: 363
      },
      searchHintLi: {
        padding: '0 12px',
        height: '26px',
        textAlign: 'left',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        height: '30px',
        lineHeight: '30px',
        fontSize: '14px',
        color: '#fff'
      },
      hintActive: {
        background: 'rgba(0,0,0,.6)',
        marginTop: 0
      }
    };

    return (
      <div style={styles.root}>
        <div style={styles.headBox}>
          <div style={styles.bannerBackground}></div>
          <div style={styles.mask}></div>
          <div style={styles.banner}>
            <div style={styles.title}></div>
            <div style={styles.searchBox}>
              <form method="get" action="/search/" style={styles.searchForm}>
                <input id="query" onFocus={this.onFocus} onBlur={this.onBlur} style={styles.query} type="text" size="27" name="q" autocomplete="off" placeholder="请输入你喜欢的歌手或者歌曲名字"/>
                  <a href="#" onclick="return false;" style={styles.go}></a>
              </form>
              <div style={styles.searchHint} ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.banner()}
        <CommentList
           title={'Test'}
           commentStore={commentStore}
           sort={'star'}
           perPage={20}
        />
      </div>
    );
  }
}

export default withWidth()(HomePage);
