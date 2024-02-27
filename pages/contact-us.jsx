import React from "react";
import {LocationMarkerIcon, MailIcon, PhoneIcon,} from "@heroicons/react/outline";
import {Formik} from "formik";
import * as yup from "yup";
import Link from "next/link";
import Layout from "../components/layout";
import {DeviceMobileIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import SEO from "../components/SEO";

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const information = {
    phone: "+61 8 89434414",
    mobile: "+61 0455 660606",
    email: "enquiry@territoryinsurancebrokers.com.au",
    address: "4/9 Cavanagh St, Darwin NT 0800",
};

export const Contact = () => {
    return (
        <>
            <SEO title={"Territory Insurance Brokers - Contact Us"}
                 description={`If you have any additional questions or would like to leave us a review, please fill out our form.`}
                 url={"https://territoryinsurancebrokers.com.au/contact-us"}/>
            <Layout>
                <div className={"my-16 xl:my-24 xl:mb-20"}>
                    <h1
                        className={
                            "text-2xl text-center xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 "
                        }
                    >
                        Contact Us
                    </h1>
                    <p className="text-sm xs:text-base xl:text-lg max-w-md xl:max-w-3xl mt-4 md:mt-8 text-center mx-auto">
                        If you have any additional questions or would like to leave us a
                        review, please fill out this form.
                    </p>
                </div>

                <ContactInformation {...information} />
            </Layout>
        </>
    );
};

const ContactInformation = ({phone, email, address, mobile}) => {
    return (
        <div className="max-w-6xl y-margin mx-auto lg:shadow-lg xl:rounded-b">
            <div
                className="bg-gradient-to-br from-blue-600 to-blue-400 text-gray-100 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2  xl:rounded-t">
                <div className="py-8 px-6 lg:py-12 lg:px-12">
                    <div className="space-y-4">
                        <div
                            className={
                                "flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0"
                            }
                        >
                            <div className="flex items-center space-x-4">
                                <a href={`tel:${phone}`}>
                                    <div className={"flex items-center space-x-4"}>
                                        <PhoneIcon className="w-5 h-5 xs:w-6 xs:h-6 lg:h-8 lg:w-8"/>
                                        <span className="text-xs xs:text-sm lg:text-base">
                      {phone}
                    </span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <a href={`tel:${mobile}`}>
                                    <div className={"flex items-center space-x-4"}>
                                        <DeviceMobileIcon className="w-5 h-5 xs:w-6 xs:h-6 lg:h-8 lg:w-8"/>
                                        <span className="text-xs xs:text-sm lg:text-base">
                      {mobile}
                    </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href={`mailto:${email}`}>
                                <div className={"flex items-center space-x-4"}>
                                    <MailIcon className="w-5 h-5 xs:w-6 xs:h-6 lg:h-8 lg:w-8"/>
                                    <span className="text-xs xs:text-sm lg:text-base">
                    {email}
                  </span>
                                </div>
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <LocationMarkerIcon className="w-5 h-5 xs:w-6 xs:h-6 lg:h-8 lg:w-8"/>
                            <span className="text-xs xs:text-sm lg:text-base">{address}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200">
                    <iframe
                        className="xl:rounded-tr"
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Level%204/9%20Cavenagh%20St,%20Darwin&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                    />
                </div>
            </div>
            <Form/>
        </div>
    );
};

const initialValues = {
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
};

const phoneValidation =
    /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, "First name is too short")
        .max(32, "First name is too long")
        .required("First name is required"),
    lastName: yup
        .string()
        .min(2, "Last name is too short")
        .max(32, "Last name is too long")
        .required("Last name is required"),
    business: yup.string().max(32, "Last name is too long"),
    email: yup.string().email("Email address must be valid"),
    privacy: yup.boolean().isTrue(),
    phone: yup.string().matches(phoneValidation, "Phone number must be valid"),
    message: yup
        .string()
        .min(10, "Message is too short")
        .max(500, "Message is too long")
        .required("Message is required"),
});

const Form = () => {
    const router = useRouter();
    return (
        <div className="bg-white px-6 overflow-hidden pt-16 xl:rounded-b">
            <div className="relative mx-auto max-w-3xl">
                <h3 className="font-medium text-gray-600 font-semibold text-2xl xs:text-3xl xl:text-4xl text-center">
                    How can we help?
                </h3>
                <p className="text-base xl:text-lg my-8 mx-auto max-w-xl xl:max-w-3xl text-center text-gray-700">
                    We will get back to you as soon as possible. Thank you for getting in
                    touch with us.
                </p>
                <Formik
                    onSubmit={(values, actions) => {
                        fetch("/", {
                            method: "POST",
                            headers: {"Content-Type": "application/x-www-form-urlencoded"},
                            body: encode({"form-name": "contact-form123", ...values}),
                        })
                            .then(() => {
                                actions.resetForm();
                                router.push("/success");
                            })
                            .catch(() => {
                                router.push("/error");
                            })
                            .finally(() => actions.setSubmitting(false));
                    }}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({
                          values,
                          errors,
                          isValidating,
                          isValid,
                          handleSubmit,
                          handleChange,
                          handleBlur,
                        setFieldValue
                      }) => (
                        <form
                            name={"contact-form123"}
                            data-netlify={true}
                            netlify-honeypot="bot-field"
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 my-16 sm:gap-x-8"
                        >
                            <div>
                                <div className="hidden">
                                    <input name="bot-field"/>
                                </div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.firstName && (
                                        <span className="text-xs text-gray-500">
                      {errors.firstName}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.lastName && (
                                        <span className="text-xs text-gray-500">
                      {errors.lastName}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Business
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.business}
                                        type="text"
                                        name="business"
                                        id="business"
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.businessName && (
                                        <span className="text-xs text-gray-500">
                      {errors.businessName}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.email && (
                                        <span className="text-xs text-gray-500">
                      {errors.email}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phone}
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                        placeholder="+61 400-123-456"
                                    />
                                    {errors.phone && (
                                        <span className="text-xs text-gray-500">
                      {errors.phone}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <div className="mt-1">
                  <textarea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.message}
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                      defaultValue={""}
                  />
                                    {errors.message && (
                                        <span className="text-xs text-gray-500">
                      {errors.message}
                    </span>
                                    )}
                                </div>
                                <div className="flex items-center h-16 ">
                                    <label htmlFor="contactEmail" className="text-xs ml-3 ">
                                        I consent to my data being collected and stored for the purpose of this
                                        enquiry in accordance with our
                                        <Link href={"/privacy-policy"}>
                                            <a className={"font-semibold"}>{" "}privacy policy.</a>
                                        </Link>
                                    </label>
                                    <div>
                                        <input
                                            id="privacyInput"
                                            name="privacyInput"
                                            type="checkbox"
                                            checked={values.privacy}
                                            onChange={() => {

                                                setFieldValue("privacy", !values.privacy);
                                            }}
                                            className="ml-4 mt-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    disabled={isValidating || !isValid}
                                    type="submit"
                                    className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                                        isValidating || !isValid
                                            ? "bg-gray-400"
                                            : "bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Contact;
