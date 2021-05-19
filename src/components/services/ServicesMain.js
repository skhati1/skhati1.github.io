import React, { useState } from 'react';

import Image1 from '../../images/image1.jpg'
import Image2 from '../../images/image2.jpg'
import Image3 from '../../images/image3.jpg'
import Classroom2 from '../../images/classroom2.jpg'

import SplitSection from '../../components/SplitSection'

import { VIEW } from '../Constants';

import Private from './Private'
import DriversEd from './DriversEd'
import RoadTest from './RoadTest'
import ParentRegistration from './ParentRegistration'

import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { PDFtoIMG } from 'react-pdf-to-image';
import file from '../../data/pricing.pdf';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

export default function ServicesMain() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);


    const [showDialog, setShowDialog] = useState(false)
    const [view, setView] = useState(VIEW.NONE)

    const setChild = (flag, view) => {
        setShowDialog(flag)
        setView(view)
    }

    let component = null;
    switch (view) {
        case VIEW.DRIVERS_ED:
            component = <DriversEd setChild={setChild} />;
            break;
        case VIEW.PRIVATE:
            component = <Private setChild={setChild} />;
            break;
        case VIEW.ROAD_TEST:
            component = <RoadTest setChild={setChild} />
            break;
        case VIEW.PARENT:
            component = <ParentRegistration setChild={setChild} />
            break;
        default:
            component = <div>Error. Please try again later!</div>;
    }

    return <div>
        <h2 className="text-center text-3xl lg:text-5xl font-semibold">Services</h2>
        <Dialog disableBackdropClick disableEscapeKeyDown open={showDialog} onClose={() => setShowDialog(false)}>
            {component}
        </Dialog>

        <SplitSection
            id="services"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Driver's ED Program</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>30 Hours in Class Lessons</li>
                            <li>12 Hours in Car Instruction</li>
                            <li>6 Hours of Observation</li>
                            <li>2 Hours Parent Class</li>
                        </ul>
                        <div className="mt-8 md:mt-12">
                            <Link to="/pricing" target="_blank">Pricing</Link> &nbsp;&nbsp;                                
                            <button onClick={() => setChild(true, VIEW.DRIVERS_ED)} type="button" className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            }
            secondarySlot={<img src={Image1} alt="Private Lesson Sample Image" />}
        />
        <SplitSection
            reverseOrder
            primarySlot={
                <div className="lg:pl-32 xl:pl-48">
                    <h3 className="text-3xl font-semibold leading-tight">Private Lesson</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>1 Hour Driving Lesson</li>
                            <li>6 Hour Driving Lessons</li>
                            <li>12 Hours Driving Lessons</li>
                        </ul>
                        <div className="mt-8 md:mt-12">
                            <Link to="/pricing" target="_blank">Pricing</Link> &nbsp;&nbsp;                                
                            <button onClick={() => setChild(true, VIEW.PRIVATE)} type="button" className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            }
            secondarySlot={<img src={Image2} alt="Private Lesson Sample Image" />}
        />
        <SplitSection
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Parent Class</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>Offered Second Monday of Every Month</li>
                            <li>5:30 PM - 7:30 PM</li>
                            <li>In Person</li>
                        </ul>
                        <div className="mt-8 md:mt-12">                             
                            <button onClick={() => setChild(true, VIEW.PARENT)} type="button" className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            }
            secondarySlot={<img src={Classroom2} alt="Private Lesson Sample Image" />}
        />
        <SplitSection
            reverseOrder
            primarySlot={
                <div className="lg:pl-32 xl:pl-48">
                    <h3 className="text-3xl font-semibold leading-tight">Road Test Sponsorship</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>Group Road Test</li>
                            <li>Road Test at RMV</li>
                        </ul>
                        <p className="mt-8 md:mt-12">
                            <Link to="/pricing" target="_blank">Pricing</Link> &nbsp;&nbsp;                                
                            <button onClick={() => setChild(true, VIEW.ROAD_TEST)} type="button"
                                className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </p>
                    </div>
                </div>
            }
            secondarySlot={<img src={Image3} alt="Private Lesson Sample Image" />}
        />


        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Pricing
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <PDFtoIMG file={file}>
                    {({ pages }) => {
                        if (!pages.length) return 'Loading...';
                        return pages.map((page, index) =>
                            <img key={index} src={page} />
                        );
                    }}
                </PDFtoIMG>
            </div>
        </Dialog>
    </div>
}