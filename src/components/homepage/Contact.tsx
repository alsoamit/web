"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cta from "@/components/buttons/Cta";
import Button from "@/components/buttons/Button";
import { CiClock1 } from "react-icons/ci";
import CalendlyModal from "@/components/models/CalendlyModal";
import { AiOutlineSend } from "react-icons/ai";

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="c-container pb-24 md:pt-24 space-y-6">
      <CalendlyModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
          <Button icon={CiClock1} onClick={() => setIsOpen(true)}>
            Schedule
          </Button>
          <div className="md:py-40"></div>
        </div>
        <div className="sm:px-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 font-mono"
          >
            <h3 className="md:pt-20 text-white font-mono">
              Get a personalized proposal!
            </h3>
            <div>
              <input
                className="c-input"
                type="text"
                id="fullname"
                placeholder="Full Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <input
                className="c-input"
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <input
                className="c-input"
                type="text"
                id="company"
                placeholder="Company"
                {...register("company")}
              />
            </div>
            <div>
              <input
                className="c-input"
                type="tel"
                id="phone"
                placeholder="Phone Number"
                {...register("phone")}
              />
            </div>
            <div>
              <textarea
                className="c-input h-40"
                id="message"
                placeholder="Message"
                {...register("message")}
              ></textarea>
            </div>
            <div className="pt-6">
              <Cta icon={AiOutlineSend}>Submit</Cta>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
