import React, { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Textbox from '../forms/Textbox';

import Popover from '@material-ui/core/Popover';

import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Datepicker from '../forms/Datepicker'
import TimePicker from '../forms/TimePicker'
import TermsAndConditions from '../../data/policies.pdf'
import PhoneNumberTextBox from '../forms/PhoneNumberTextBox'

import { Alert, AlertTitle } from '@material-ui/lab';

import { VIEW } from '../Constants';
import { SendDrivingServiceEmail, SendDrivingServiceBackupEmail } from '../helpers/Emailer';
import Validate from '../helpers/Validator';

import ToggleBtn from '../forms/ToggleBtn';

const form_steps = ['Student Information', 'Driver Details', 'Package Summary'];


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    typography: {
        padding: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function RoadTest({ setChild }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = form_steps;
    const [formSubmittedCorrectly, setFormSubmittedCorrectly] = React.useState(false)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            handleSubmit(setChild)
        }
        setActiveStep(activeStep => activeStep + 1);

    };
    const handleBack = () => { setActiveStep(activeStep => activeStep - 1); };

    const handleSubmit = async () => {
        var emailForm = {
            "First Name": studentFirstName,
            "Last Name": studentLastName,
            "Street Address": streetAddress,
            "City": city,
            "Zip Code": zipCode,
            "Student Email": studentEmail,
            "Parent Email": "",
            "Student Cell Phone": studentCellPhone,
            "Date of Birth": dob,
            "Best Time to Call": bestTimeToCall,
            "Learner's Permit": learnersPermit,
            "Road Test Date": roadTestDate,
            "Road Test Time": roadTestTime,
            "Road Test Location": roadTestLocation,
            "Road Test Scheduled": roadTestScheduled,
            "Package": bbbPackage,
            "Agree With Price": agreeWithPrice,
            "Agree With Terms": agreeWithTerms
        }

        var requiredFields = {
            "First Name": studentFirstName,
            "Last Name": studentLastName,
            "Street Address": streetAddress,
            "City": city,
            "Zip Code": zipCode,
            "Student Email": studentEmail,
            "Student Cell Phone": studentCellPhone,
            "Date of Birth": dob,
            "Learner's Permit Number": learnersPermit,
            "Package": bbbPackage,
            "Agree With Price": agreeWithPrice,
            "Agree With Terms": agreeWithTerms
        }        
        var invalidItems = Validate(requiredFields)
        if (invalidItems.length === 0) {
            var condition = await SendDrivingServiceEmail(emailForm)
            if (condition) {
                setFormSubmittedCorrectly(true)
            } else {
                var backupCondition = await SendDrivingServiceBackupEmail(emailForm, condition)
                if (backupCondition) {
                    setFormSubmittedCorrectly(true)
                }
                else {
                    alert("Submitting Registration. Please try again or give us a call!")
                    setFormSubmittedCorrectly(false)
                    handleBack()
                }
            }
        }
        else {
            var errorItem = "Please fill out the following items and try again: \n"
            for (var item in invalidItems) {
                errorItem += invalidItems[item] + "\n"
            }
            alert(errorItem)
            setFormSubmittedCorrectly(false)
            handleBack()
        }
    }

    const [studentFirstName, setStudentFirstName] = useState('')
    const [studentLastName, setStudentLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [studentCellPhone, setStudentCellPhone] = useState('')
    const [dob, setDob] = useState('')
    const [bestTimeToCall, setBestTimeToCall] = useState('')
    const [learnersPermit, setLearnersPermit] = useState('')
    const [roadTestDate, setRoadTestDate] = useState('')
    const [roadTestTime, setRoadTestTime] = useState('')
    const [roadTestLocation, setRoadTestLocation] = useState('')
    const bbbPackage = "Road Test Sponsorship - $120.00"
    const [agreeWithPrice, setAgreeWithPrice] = useState(false)
    const [agreeWithTerms, setAgreeWithTerms] = useState(false)
    const [roadTestScheduled, setRoadTestScheduled] = useState(false)


    return <div>
        <DialogTitle className="text-center">Road Test Registration</DialogTitle>

        <DialogContent>
            <div className="text-center">Please use the following form to register for our Road Test Sponsorship!</div>

            <div className="container mx-auto">
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>
                                        {(() => {
                                            switch (index) {
                                                case 0:
                                                    return (<div className={classes.root}>
                                                        <Textbox required value={studentFirstName} id='studentFirstName' label='Student First Name' onChange={(val) => setStudentFirstName(val)} />

                                                        <Textbox required value={studentLastName} id='studentLastName' label='Student Last Name' onChange={(val) => setStudentLastName(val)} />

                                                        <Textbox required value={streetAddress} id='streetAddress' label='Street Address' onChange={(val) => setStreetAddress(val)} />


                                                        <Textbox required value={city} id='city' label='City' onChange={(val) => setCity(val)} />

                                                        <Textbox required value={zipCode} id='zipCode' label='Zip Code' onChange={(val) => setZipCode(val)} />


                                                        <Textbox required value={studentEmail} id='studentEmail' label='Student Email' onChange={(val) => setStudentEmail(val)} />

                                                        <PhoneNumberTextBox required value={studentCellPhone} id='studentCellPhone' label='Student Cell Phone' onChange={(val) => setStudentCellPhone(val)} />

                                                        <Datepicker required value={dob} id='dob' label='Date of Birth' onChange={(val) => setDob(val)} />


                                                    </div>
                                                    );
                                                case 1:
                                                    return (<div>
                                                        <Textbox required value={learnersPermit} id='learnersPermit' label="Learner's Permit Number" onChange={(val) => setLearnersPermit(val)} fullWidth={true} />

                                                        <Textbox value={bestTimeToCall} id='bestTimeToCall' label='Best Time to Call' onChange={(val) => setBestTimeToCall(val)} />


                                                        <Datepicker label='Road Test Date' value={roadTestDate} id='roadTestDate' onChange={(val) => setRoadTestDate(val)} />

                                                        <TimePicker label='Road Test Time' value={roadTestTime} id='roadTestTime' onChange={(val) => setRoadTestTime(val)} />

                                                        <Textbox value={roadTestLocation} id='roadTestLocation' label='Road Test Location' onChange={(val) => setRoadTestLocation(val)} />

                                                        <table>
                                                            <tr>
                                                                <td>Have you already scheduled a Road Test with the RMV?</td>
                                                                <td><ToggleBtn value={roadTestScheduled} setValue={(val) => setRoadTestScheduled(val)} /></td>
                                                            </tr>
                                                        </table>
                                                    </div>

                                                    );
                                                case 2:
                                                    return (<div>
                                                        <Alert severity="info">
                                                            <AlertTitle>Selected Package</AlertTitle>
                                                            {bbbPackage}
                                                        </Alert>
                                                        <br />
                                                        <div>
                                                            <Checkbox checked={agreeWithPrice} onChange={(e) => setAgreeWithPrice(e.target.checked)} value="secondary" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                                                            *I have reviewed and agree upon the price shown above! Credit / Debit card payments done via PayPal will be subject to 3% service charge
                                                        </div>
                                                        <br />
                                                        <div>
                                                            <Checkbox checked={agreeWithTerms} onChange={(e) => setAgreeWithTerms(e.target.checked)} value="secondary" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                                                            *I have read and agree with the &nbsp;&nbsp;

                                                            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}> Terms & Conditions </Button>                                                            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                                                                anchorOrigin={{
                                                                    vertical: 'bottom',
                                                                    horizontal: 'center',
                                                                }}
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'center',
                                                                }}
                                                            >
                                                                <Typography className={classes.typography}>
                                                                    <ul>
                                                                        <li>- The RMV may cancel the road test schedule due to severe weather, state emergency and any other reason that BBB Auto School does not have any controls over.
                                                                            <br />- In order to confirm your appointment, please verify with RMV.
                                                                            <br />- If RMV cancels your appointment, you can reschedule with them.
                                                                            <br />- Road test sponsorship fee does not include any RMV Fees.</li>
                                                                        <li>- Once booked for sponsorship with BBB Auto School, no cancellation can be made within 72 hours of the appointment.</li>                                                                        <li>- The student driver should be on time for their road test. If you are more than 15 minutes late, will be marked as no
                                                                            <br />show resulting in a missed road test and no money will be refunded.</li>
                                                                    </ul>
                                                                </Typography>
                                                            </Popover>
                                                        </div>
                                                    </div>);
                                                default:
                                                    return 'Unknown step';
                                            }
                                        })()}
                                    </Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}> Back </Button>
                                            <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}> {activeStep === steps.length - 1 ? 'Submit' : 'Next'} </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {formSubmittedCorrectly && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Thank you for your registration. Someone will reach out to you via phone or email within the next 24 hours.</Typography>
                        </Paper>
                    )}
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <button onClick={() => setChild(false, VIEW.NONE)} type="button"
                className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                Close
            </button>
        </DialogActions>
    </div>
}