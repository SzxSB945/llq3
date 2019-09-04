import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'

/**
 * 引入组件
 */
/* import ShowBar from './showBar'
import ShowBar2 from './showBar2'
import ShowBar3 from './showBar3'
import ShowBar4 from './showBar4'
import EventBar from './eventBar'
import SHmap from './shanghaiMap'
import WisdomCase from './wisdomCase'
import WisdomCase2 from './wisdomCase2'
import HighRiskCase from './highRiskCase'
import BurstCase from './burstCase'
import BusinessTarget from './businessTarget' */

/* 实施动态4块模块 */
import SsdtData1 from './ssdtData1'
import SsdtData2 from './SsdtData2'
import SsdtData3 from './ssdtData3'
import SsdtData4 from './ssdtData4'
/* 实施动态4块模块end */

/* 各产品检测时间 */
 import ProductInspection from './productInspection'

/* 各产品检测时间end */

/* 风险因素预警 */
import RiskEarlyWarning from './riskEarlyWarning'
/* 风险因素预警end */

 
/* 快检趋势分析 */
import KjqsfxData1 from './kjqsfxData1'
import KjqsfxData2 from './kjqsfxData2'
import KjqsfxData3 from './kjqsfxData3'
import KjqsfxData4 from './kjqsfxData4'
/* 快检趋势分析end */


class Echart extends React.Component {
    render() {
        return (
            <div className={`${css(styles.contentDiv)}`} style={{ width: '100%', height: '100%' }}>

                {/* 实施动态 */}
                <div className={css(styles.leftUpperLayout)}>
                    <div className={css(styles.leftUpperTitle)}>实时动态</div>

                    {/* 左上布局 */}
                    <div className={css(styles.ssdtLeft)}><SsdtData1 /></div>

                    {/* 右下 */}
                    <div className={css(styles.ssdtrightLower)}><SsdtData2 /></div>

                    {/* 左下 */}
                    <div className={css(styles.ssdtLeftLower)}><SsdtData3 /></div>

                    {/* 右上 */}
                    <div className={css(styles.ssdtright)}><SsdtData4 /></div>

                </div>

                {/* 风险因素预警 */}
                <div className={css(styles.lowerLeftLayout)}>
                    <div className={css(styles.lowerLeftLayoutTitle)}>风险因素预警</div>
                    <div className={css(styles.fxysyjBackground)}><RiskEarlyWarning /></div>

                </div>

                {/* 各产品检测时间 */}
                <div className={css(styles.rightUpperLayout)}>
                    <div className={css(styles.rightUpperLayoutTitle)}>各产品检测时间</div>
                    <div className={css(styles.gcpjcsjBackground)}>{<ProductInspection />}</div>


                </div>

                {/* 快检趋势分析 */}
                <div className={css(styles.lowerRightLayout)}>
                    <div className={css(styles.lowerRightLayoutTitle)}>快检趋势分析</div>
                    {/* 左上布局 */}
                    <div className={css(styles.kjqsfxLeft)}><KjqsfxData4 /></div>

                    {/* 右下 */}
                    <div className={css(styles.kjqsfxrightLower)}><KjqsfxData1 /></div>

                    {/* 左下 */}
                    <div className={css(styles.kjqsfxLeftLower)}><KjqsfxData2 /></div>

                    {/* 右上 */}
                    <div className={css(styles.kjqsfxright)}><KjqsfxData3 /></div>
 
                </div>
                {/*                 <div className={css(styles.contentItemL)}>
                    <div className={css(styles.leftItem1)}><WisdomCase2 /></div>
                    <div className={css(styles.leftItemTop)}><ShowBar /></div>
                    <div className={css(styles.leftItemBottom)}><ShowBar2 /></div>
                </div>
                <div className={css(styles.contentItemC)}><SHmap /></div>
                <div className={css(styles.contentItemR)}>
                    <div className={css(styles.rightItem1)}><WisdomCase /></div>
                    <div className={css(styles.rightItem2)}><ShowBar3/></div>
                    <div className={css(styles.rightItem3)}><ShowBar4 /></div>
                </div> */}
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            dataSource: state.dataSource
        }
    }
)(Echart)

const styles = StyleSheet.create({

    /* 左上布局 */
    leftUpperLayout: {
        width: '49%',
        height: '44%',
        float: 'left',
        marginTop: '30px !important'


    },
    /* 左下布局 */
    lowerLeftLayout: {
        width: '49%',
        height: '49%',
        float: 'left'

    },

    /* 右上布局 */
    rightUpperLayout: {
        width: '49%',
        height: '44%',
        float: 'left',
        marginTop: '30px !important',
        marginLeft: '2%'

    },

    /*  右下布局 */
    lowerRightLayout: {
        width: '49%',
        height: '49%',
        float: 'left',
        marginLeft: '2%'
    },

    /* 左上标题 */
    leftUpperTitle: {
        height: '32px',
        background: `url('./image/leftUpperTitle.png') no-repeat`,
        color: '#fff',
        fontSize: '20px',
        fontWeight: 1000,
        cursor: 'pointer',
        paddingLeft: '55px'
    },
    /* 右上标题 */
    rightUpperLayoutTitle: {
        height: '32px ',
        background: `url('./image/rightUpperLayoutTitle.png') no-repeat`,
        color: '#fff',
        fontSize: '20px',
        fontWeight: 1000,
        cursor: 'pointer',
        paddingLeft: '74px'
    },
    /* 左下标题 */
    lowerLeftLayoutTitle: {
        height: '32px ',
        background: `url('./image/lowerLeftLayoutTitle.png') no-repeat`,
        color: '#fff',
        fontSize: '20px',
        fontWeight: 1000,
        cursor: 'pointer',
        paddingLeft: '70px'
    },

    /* 右下标题 */
    lowerRightLayoutTitle: {
        height: '32px',
        background: `url('./image/leftUpperTitle.png') no-repeat`,
        color: '#fff',
        fontSize: '20px',
        fontWeight: 1000,
        cursor: 'pointer',
        paddingLeft: '55px'
    },

    ssdtLeft: {
        width: '48%',
        height: '45%',
        background: `url('./image/leftBackground.png') no-repeat`,
        float: 'left',

    },
    ssdtLeftLower: {
        width: '48%',
        height: '45%',
        background: `url('./image/leftBackground.png') no-repeat`,
        float: 'left',
        marginTop: '1%',

    },
    ssdtright: {
        width: '48%',
        height: '45%',
        background: `url('./image/leftBackground.png') no-repeat`,
        float: 'left',
        marginLeft: '2%',
        marginTop: '1%'
    },
    ssdtrightLower: {
        width: '48%',
        height: '45%',
        background: `url('./image/leftBackground.png') no-repeat`,
        float: 'left',
        marginLeft: '2%',
    },

    /* 风险因素预警 */
    fxysyjBackground: {
        width: '100%',
        height: '93%',
        background: `url('./image/fxysyjBackground.png') no-repeat`

    },
    /* 各产品检测时间背景 */
    gcpjcsjBackground: {
        width: '100%',
        height: '90%',
        background: `url('./image/gcpjcsjBackground.png') no-repeat`
    },

    kjqsfxLeft: {
        width: '49%',
        height: '45%',
        background: `url('./image/kjqsfxleftBackground.png') no-repeat`,
        float: 'left',

    },
    kjqsfxLeftLower: {
        width: '49%',
        height: '45%',
        background: `url('./image/kjqsfxleftBackground.png') no-repeat`,
        float: 'left',
        marginTop: '1%'

    },
    kjqsfxright: {
        width: '49%',
        height: '45%',
        background: `url('./image/kjqsfxleftBackground.png') no-repeat`,
        float: 'left',
        marginLeft: '1.5%',
        marginTop: '1%'
    },
    kjqsfxrightLower: {
        width: '49%',
        height: '45%',
        background: `url('./image/kjqsfxleftBackground.png') no-repeat`,
        float: 'left',
        marginLeft: '1.5%',
    },
    contentDiv: {
        padding: '60px 20px 15px',
        boxSizing: 'border-box',
        position: 'relative',
        display: '-webkit-flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    contentItemL: {
        width: '25%',
        height: '100%',
        padding: '10px 10px 10px 0',
        boxSizing: 'border-box',
        float: 'left'
    },
    leftItem1: {
        width: '70%',
        height: '180px',
        padding: '8px 6px 20px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `url('./image/sjl.png') center center no-repeat`,
        // background:'none',
        // border:'1px solid #888',
        backgroundSize: '100%'
    },
    leftItemTop: {
        width: '80%',
        height: '200px',
        //padding:'8px 6px 15px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `url('./image/sjl.png') center center no-repeat`,  //jgzx
        // background:'none',
        backgroundSize: '100%',
    },
    leftItemBottom: {
        width: '80%',
        height: '631px',
        //padding:'8px 6px 15px',
        boxSizing: 'border-box',
        background: `url('./image/jgzx.png') center center no-repeat`,//sjl
        // background:'none',
        backgroundSize: '100%',
        //marginTop:'34px'
    },
    contentItemC: {
        width: '50%',
        height: '100%',
        position: 'relative',
        padding: '10px',
        boxSizing: 'border-box',
        float: 'left'
    },
    contentItemR: {
        width: '25%',
        height: '100%',
        padding: '10px 0 10px 40px',
        boxSizing: 'border-box',
        float: 'right'
    },
    rightItem1: {
        width: '85%',
        height: '260px',
        //padding:'6px 6px 13px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `url('./image/sjl3.png') center center no-repeat`, //sjl zhtj
        //background:'none',
        // border:'1px solid #888',
        backgroundSize: '100%',
        float: 'right',
        marginTop: '5px'
    },
    rightItem2: {
        width: '85%',
        height: '260px',
        //padding:'6px 6px 13px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `url('./image/sjl3.png') center center no-repeat`,  //gfxaj
        // background:'none',
        backgroundSize: '100%',
        marginTop: '19px',
        float: 'right',
        marginTop: '40px'
    },
    rightItem3: {
        width: '85%',
        // height:'98px',
        height: '260px',
        // padding:'6px 6px 13px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `url('./image/sjl3.png') center center no-repeat`,  //tfsj
        // background:'none',
        backgroundSize: '100%',
        marginTop: '19px',
        float: 'right',
        marginTop: '40px'
    },
    rightItem4: {
        width: '100%',
        height: '448px',
        padding: '6px 6px 13px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `url('./image/ywzb.png') center center no-repeat`,
        background: 'none',
        backgroundSize: '100%',
        marginTop: '19px'
    }
})

