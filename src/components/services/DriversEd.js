import React, { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Textbox from '../forms/Textbox';

import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DropDown from '../forms/Dropdown';
import Datepicker from '../forms/Datepicker'
import PhoneNumberTextBox from '../forms/PhoneNumberTextBox'

import TermsAndConditions from '../../data/policies.pdf'
import { Alert, AlertTitle } from '@material-ui/lab';

import { VIEW } from '../Constants';
import { SendDrivingServiceEmail, SendDrivingServiceBackupEmail } from '../helpers/Emailer';
import Validate from '../helpers/Validator';
const form_steps = ['Student Information', 'Parent Information', 'Package Summary'];


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

const privatePackageOptions = {
    "Full Package": "$699.00",
    "30 Hours Classroom Lessons": "$199.00",
    "12 Hours Driving Instruction": "$570.00"
}

const classAttendingOptions = {
    "Black Friday": "Black Friday",
    "Christmas Break": "Christmas Break",
    "February Break": "February Break",
    "April Break": "April Break",
    "Memorial Day Weekend": "Memorial Day Weekend",
    "4th Monday of June": "4th Monday of June",
    "4nd Monday of July": "4nd Monday of July",
    "4th Monday of August": "4th Monday of August",
    "Columbus Day Weekend": "Columbus Day Weekend"
}

export default function DriversEd({ setChild }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = form_steps;
    const [formSubmittedCorrectly, setFormSubmittedCorrectly] = React.useState(false)

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            handleSubmit(setChild)
        }
        setActiveStep(activeStep => activeStep + 1);

    };
    const handleBack = () => { setActiveStep(activeStep => activeStep - 1); };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSubmit = async () => {
        var emailForm = {
            "First Name": studentFirstName,
            "Last Name": studentLastName,
            "Street Address": streetAddress,
            "City": city,
            "Zip Code": zipCode,
            "Student Email": studentEmail,
            "Student Cell Phone": studentCellPhone,
            "Date of Birth": dob,
            "Best Time to Call": bestTimeToCall,
            "Learner's Permit": learnersPermit,
            "Parent Name": parentName,
            "Parent Email": parentEmail,
            "Parent Phone": parentPhone,
            "Home Phone": homePhone,
            "Class Attending": classAttending[0],
            "Package": "Driver's ED " + privatePackage[0] + " : " + privatePackage[1],
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
            "Package": privatePackage[0],
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
    const [homePhone, setHomePhone] = useState('')
    const [parentName, setParentName] = useState('')
    const [parentEmail, setParentEmail] = useState('')
    const [parentPhone, setParentPhone] = useState('')
    const [bestTimeToCall, setBestTimeToCall] = useState('')
    const [learnersPermit, setLearnersPermit] = useState('')
    const [dob, setDob] = useState('')
    const [agreeWithPrice, setAgreeWithPrice] = useState(false)
    const [agreeWithTerms, setAgreeWithTerms] = useState(false)

    const [privatePackage, setPrivatePackage] = useState(['', ''])

    const [classAttending, setClassAttending] = useState(['', ''])

    const [comments, setComments] = useState('')

    return <div>
        <DialogTitle className="text-center">Driver's ED Registration</DialogTitle>

        <DialogContent>
            <div className="text-center">Please use the following form to register for our Driver's ED Program!</div>

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
                                                        <Textbox required fullWidth={true} value={studentFirstName} id='studentFirstName' label='Student First Name' onChange={val => setStudentFirstName(val)} />

                                                        <Textbox required value={studentLastName} id='studentLastName' label='Student Last Name' onChange={val => setStudentLastName(val)} />

                                                        <Textbox required value={streetAddress} id='streetAddress' label='Street Address' onChange={val => setStreetAddress(val)} />


                                                        <Textbox required value={city} id='city' label='City' onChange={val => setCity(val)} />

                                                        <Textbox required value={zipCode} id='zipCode' label='Zip Code' onChange={val => setZipCode(val)} />


                                                        <Textbox required value={studentEmail} id='studentEmail' label='Student Email' onChange={val => setStudentEmail(val)} />

                                                        <PhoneNumberTextBox required value={studentCellPhone} id='studentCellPhone' label='Student Cell Phone' onChange={val => setStudentCellPhone(val)} />


                                                        <Datepicker required value={dob} id='dob' label='Date of Birth' onChange={val => setDob(val)} />

                                                        <Textbox value={bestTimeToCall} id='bestTimeToCall' label='Best Time to Call' onChange={val => setBestTimeToCall(val)} />

                                                        <Textbox value={learnersPermit} id='learnersPermit' label="Learner's Permit Number" onChange={val => setLearnersPermit(val)} fullWidth={true} />

                                                    </div>
                                                    );
                                                case 1:
                                                    return (<div>
                                                        <Textbox value={parentName} id='parentName' label="Parent Name" onChange={val => setParentName(val)} />

                                                        <Textbox value={parentEmail} id='parentEmail' label='Parent Email' onChange={val => setParentEmail(val)} />

                                                        <PhoneNumberTextBox value={parentPhone} id='parentPhone' label='Parent Phone' onChange={val => setParentPhone(val)} />

                                                        <PhoneNumberTextBox value={homePhone} id='homePhone' label='Home Phone' onChange={val => setHomePhone(val)} />

                                                        <div>
                                                            <span style={{ paddingLeft: "1vh" }}>Class Attending: </span>
                                                            <DropDown required options={classAttendingOptions} value={classAttending} id='classAttending' label='Class Attending' onChange={val => setClassAttending(val)}></DropDown><br />
                                                        </div><br />
                                                        <Textbox value={comments} id='comments' label='Comments' onChange={val => setComments(val)} />



                                                    </div>

                                                    );
                                                case 2:
                                                    return (<div>
                                                        <Alert severity="info">
                                                            <AlertTitle>Select a Package</AlertTitle>
                                                            <div>
                                                                <DropDown required options={privatePackageOptions} value={privatePackage} id='privatePackage' label='Package' onChange={val => setPrivatePackage(val)}></DropDown><br />
                                                                <br />
                                                                Final Price: {privatePackage[1]}
                                                            </div>

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

                                                            <Button href={TermsAndConditions} variant="contained" color="primary" target="_blank"> Terms & Conditions </Button>

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