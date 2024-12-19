import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto max-w-7xl p-4 text-gray-500">
        <h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
        <p className="mt-4">
          This privacy policy has been compiled to better serve those who are
          concerned with how their 'Personally Identifiable Information' (PII) is
          being used online. PII, as described in US privacy law and
          information security, is information that can be used on its own or
          with other information to identify, contact, or locate a single person,
          or to identify an individual in context. Please read our privacy
          policy carefully to get a clear understanding of how we collect,
          use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>
        <p className="mt-4">
          What personal information do we collect from the people that visit our
          blog, website or app? When ordering or registering on our site, as
          appropriate, you may be asked to enter your name, email address or
          other details to help you with your experience.
        </p>
        <p className="mt-4">
          When do we collect information? We collect information from you when
          you register on our site, place an order, subscribe to a newsletter or
          enter information on our site.
        </p>
        <p className="mt-4">
          How do we use your information? We may use the information we collect
          from you when you register, make a purchase, sign up for our newsletter,
          respond to a survey or marketing communication, surf the website, or
          use certain other site features in the following ways:
        </p>
        <ul className="list-disc ml-8 mt-4">
          <li>To personalize your experience and to allow us to deliver the
            type of content and product offerings in which you are most
            interested.</li>
          <li>To improve our website in order to better serve you.</li>
          <li>To allow us to better service you in responding to your customer
            service requests.</li>
          <li>To administer a contest, promotion, survey or other site feature.</li>
          <li>To quickly process your transactions.</li>
          <li>To ask for ratings and reviews of services or products.</li>
        </ul>
        <p className="mt-4">
          We do not use vulnerability scanning and/or scanning to PCI standards.
          We only provide articles and information. We never ask for credit card
          numbers. We do not use Malware Scanning. Your personal information is
          contained behind secured networks and is only accessible by a limited
          number of persons who have special access rights to such systems, and
          are required to keep the information confidential. In addition, all
          sensitive/credit information you supply is encrypted via Secure Socket
          Layer (SSL) technology.
        </p>
        <p className="mt-4">
          We do not use cookies for tracking purposes. You can choose to have your
          computer warn you each time a cookie is being sent, or you can choose
          to turn off all cookies. You do this through your browser settings.
          Since browser is a little different, look at your browser's Help Menu
          to learn the correct way to modify your cookies.
        </p>
        <p className="mt-4">
          If you turn cookies off, Some of the features that make your site
          experience more efficient and may not function properly.that make your
          site experience more efficient and may not function properly.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
