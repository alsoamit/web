import React from "react";
import Cta from "../buttons/Cta";
import Button from "../buttons/Button";

export default function Contact() {
  return (
    <div className="c-container grid grid-cols-1 md:grid-cols-2 gap-16 py-24 md:py-60">
      <div className="space-y-12">
        <div className="bg-primary py-8 md:py-20 p-6 md:px-10 text-white space-y-6">
          <h2 className="text-4xl font-mono">Schedule a Meeting</h2>
          <p className="sm:text-base max-w-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            ipsam iure quia enim cupiditate repellendus voluptatem ipsa, cumque
            possimus magni. Deleniti voluptate ipsa sint consequatur alias
          </p>
          <Button>Schedule</Button>
          <div className="md:py-40"></div>
        </div>
      </div>
      <div className="px-6">
        <form action="#" className="space-y-6">
          <div className="md:pt-20">
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
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number: Format: 123-456-7890"
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
  );
}
