import React from 'react';
import swal from 'sweetalert';
import ContactForm from './ContactForm';
import Details from './Details';
import Faq from '../faq/Faq';

const ContactInfo = ({ contactData, isFaq }) => {
  const handleSubmit = async (e) => {
    // eslint-disable-next-line no-undef
    const res = await fetch('/api/subscribe', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: e.email,
        firstName: e.firstName,
        lastName: e.lastName,
        message: e.message,
        phone: e.phone,
        company: e.company,
        projectType: e.projectType,
      }),
    });

    const { error } = await res.json();
    console.log(error, 'error');
    if (error === 'Success') {
      swal('Success!', '🎉  Subscribed successfully', 'success');
    } else {
      swal('Already Subscribed!', error, 'error');
    }
  };
  return (
    <section className="section contact-us bg-white  is-hero-fade">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="block">
              <div className="row justify-content-center">
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <div className="pr-0 pr-lg-4">
                    {isFaq ? <Faq /> : <Details contactData={contactData} />}
                  </div>
                </div>
                <div className="col-lg-7">
                  <ContactForm onSubmit={(val) => handleSubmit(val)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
