import React from "react";
import Cta from "../buttons/Cta";
import Button from "../buttons/Button";
import { CiClock1 } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="c-container pb-24 md:pt-24 space-y-6">
      <h2 className="text-left text-4xl sm:text-5xl font-bold font-heading text-white">
        Let&apos;s Talk
      </h2>
      <p className="max-w-2xl">
        Schedule a meeting or fill out the form below to receive a personalized
        proposal tailored to your needs. We&apos;re patiently waiting for you on
        the other side!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8 md:pt-16">
        <div className="bg-primary py-8 md:py-20 p-6 md:px-10 text-white space-y-6">
          <CiClock1 className="text-3xl" />
          <h2 className="text-3xl font-mono font-semibold">
            Schedule a Meeting
          </h2>
          <p className="sm:text-base max-w-sm pb-4">
            Schedule a meeting effortlessly with our Calendly link below. Choose
            a time that works for you, and let&apos;s discuss how we can help
            you achieve your goals. We look forward to meeting with you soon!
          </p>
          <Button>Schedule</Button>
          <div className="md:py-40"></div>
        </div>
        <div className="sm:px-6">
          <form action="#" className="space-y-6 font-mono">
            <h3 className="md:pt-20 text-white font-mono">
              Get a personalized proposal!
            </h3>
            <div className="">
              <input
                className="c-input"
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                className="c-input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                className="c-input"
                type="text"
                id="company"
                name="company"
                placeholder="Company"
              />
            </div>
            <div>
              <input
                className="c-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                className="c-input h-40"
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="pt-6">
              <Cta>Submit</Cta>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
