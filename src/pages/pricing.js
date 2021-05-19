import React from 'react';
import logo from '../images/logo.png';

export default class Pricing extends React.Component {
    render() {
        const body = {
            height: '842px',
            width: '625px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        const alignText = {
            textAlign: 'center',
            marginBottom: '0'
        }
        const boldFont = {
            fontWeight: 'bold'
        }
        const imageStyle = {
            height: '20%',
            width: '20%',
            objectFit: 'contain',
            margin: '0 auto'
        }
        const inputStyle = {
            border: '0',
            outline: '0',
            background: 'transparent',
            borderBottom: '2px solid black',
            marginBottom: '5px'
        }
        const divRightPad = {
           marginRight: '10px'
        }
        const divLeftPad = {
           marginLeft: '75px',
           fontWeight: 'bold'
        }
        return (
            <div style={body}>
                <div style={alignText}>
                    <div style={boldFont}>
                        <br />
                        <h4>  <img src={logo} style={imageStyle} />
                            <br />
                            Taunton, MA 02780
                            <br />
                            Tel: (508)-880-3333
                            <br style={{ marginBottom: '5px' }} />
                            Pricing Information 
                        </h4>
                    </div>
                </div>
                <br /><br />
                <div style={{ marginTop: '5px' }} >
                <table>
                    <tr style={alignText}>
                        <td>
                            <div style={divRightPad}>
                                <h4>Driver's ED Full Program</h4> <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 30 Hours of Class Lessons <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 12 Hours of Driving Lessons<br />
                                &nbsp;&nbsp;- 6 Hours of Observations<br />
                                - 2 Hours of Parent Class<br />
                            </div>
                        </td>
                        <td>
                            <h3 style={divLeftPad}>$699.00</h3>
                        </td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr style={alignText}>
                        <td style={divRightPad}>30 Hours of Classroom Lessons</td>
                        <td><h3 style={divLeftPad}>$199.00</h3></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr style={alignText}>
                        <td style={divRightPad}>12 Hours of Driving Instructions</td>
                        <td><h3 style={divLeftPad}>$570.00</h3></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr style={alignText}>
                        <td style={divRightPad}>6 Hours of Driving Lessons</td>
                        <td><h3 style={divLeftPad}>$285.00</h3></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr style={alignText}>
                        <td style={divRightPad}>1 Hour Lesson</td>
                        <td><h3 style={divLeftPad}>$50.00</h3></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr style={alignText}>
                        <td>
                            <div style={divRightPad}>
                                Road Test Sponsorship Fee
                                <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the Driving School or RMV Taunton, MA Location
                            </div>
                        </td>
                        <td>
                            <h3 style={divLeftPad}>$120.00</h3>
                        </td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                </table>
                </div>
            </div>
        );
    }
}