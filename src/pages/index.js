import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

import Faqs from '../components/Faqs';
import Links from '../components/Links';

import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

import ServicesMain from '../components/services/ServicesMain';
import HeroImage from '../images/classroom.jpg';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';

export default function Index() {
  return <div>
    <Layout>
    <section className="pt-20 md:pt-20">
      <div className="container mx-auto px-8 lg:flex">

        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            BBB Auto School
          </h1>
          RMV Certified Professional Driving School<br /><br />
          <h1 className="text-2xl lg:text-3xl xl:text-3xl font-bold leading-none">
            Call us to schedule your Road Test today!
          </h1><br />
          <a href="tel:5088803333"><Button size="lg">Call us at (508) 880-3333</Button></a>
          <p className="mt-4 text-gray-600 underline">Announcements</p>
          <p className="text-l lg:text-1xl mt-5 font-light">
            ‣ Enrollment is Open For Driver's ED Program.<br />
            ‣ Seats are Limited! Register online or by visiting our office!<br />
            ‣ Parent Classes Offered Second Monday of every month 5:30 PM - 7:30 PM. <br />
          </p>
          <br />
        </div>
        <div className="lg:w-1/2">
          <img src={HeroImage} alt="BBB Auto School Showcase" />
        </div>
      </div>
    </section>
    <section id="schedule" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Class Schedule</h2>
        <h5>Class Time: 10 AM - 4:45 PM</h5>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Winter Class</p>
              <p className="mt-4">
                Black Friday <br />
                Christmas Break <br />
                FEB Break <br />
                <br /><br /><br /><br />
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Spring Class</p>
              <p className="mt-4">
                APR Break<br />
                <br /><br /><br /><br /><br /><br />
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Summer Class</p>
              <p className="mt-4">
                Memorial Day Weekend <br />
                4th Monday of JUN <br />
                4th Monday of JUL <br />
                4th Monday of AUG
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Fall Class</p>
              <p className="mt-4">
                Columbus Day Weekend <br />
                &nbsp;<br />
                &nbsp;<br />
                &nbsp;<br />
                &nbsp;<br />
                &nbsp;<br />
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <div id="services">
      <ServicesMain />
    </div>


    <LabelText className="mb-8 text-gray-600 text-center">Contact Us</LabelText>
    <section id="contact" className="container mx-auto py-4 bg-gray-200 rounded-lg text-center">
      <SplitSection
        id="contact"
        primarySlot={
          <div>
            <p>You can reach us at: </p><br />
            <TableContainer component={Paper}>
              <Table className="table" aria-label="Contact table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">Address </TableCell>
                    <TableCell><a target="_blank" href="https://goo.gl/maps/52WcTnfLu8KdNUBM9">35 Main Street, Taunton MA 02780</a></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Phone </TableCell>
                    <TableCell> <a href="tel:5088803333"> (508) 880-3333</a></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Fax </TableCell>
                    <TableCell><a href="tel:5088803332">(508) 880-3332</a></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Email </TableCell>
                    <TableCell><a href="mailto:bbbautoschool@gmail.com">
                      bbbautoschool@gmail.com</a></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Social Media </TableCell>
                    <TableCell><a target="_blank" href="https://www.facebook.com/BBB-Auto-School-409023959855613"> Facebook</a></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <ul>
            </ul>
          </div>
        }
        secondarySlot={
          <div>
            <p>
              Office Hours<br />
              Monday - Friday 10 AM - 6 PM<br />  (With Appointments Only)
            </p><br />
            <p>
              Driving Hours<br />
              Monday - Saturday 11 AM - 7 PM <br />
            </p>
          </div>
        } />
    </section>

    <section id="faq" className="py-3 ">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Frequently Asked Questions (FAQ)</LabelText>
        <Faqs />
      </div>
    </section>

    <section id="links" className="py-3">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Links</LabelText>
        <Links />
      </div>
    </section>
  </Layout>
  </div>
}
