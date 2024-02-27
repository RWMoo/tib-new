import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Select from "../components/select";
import banner from "../public/images/tib photos/shutterstock_325745579.jpg";
import {useRouter} from "next/router";
import Link from "next/link";
import SEO from "../components/SEO";

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

export const Contact = () => {
    return (
        <>
            <SEO title={"Territory Insurance Brokers - Get A Quote"}
                 description={`Territory Insurance Brokers are here for you every step of the way. If you are interested in any of the mentioned insurance products, request an obligation free quote today.`}
                 url={"https://territoryinsurancebrokers.com.au/get-a-quote"}/>
            <Banner image={banner} alt={"home and contents insurance banner"}/>
            <Layout>
                <div className={"my-16 xl:my-24 xl:mb-20"}>
                    <h1
                        className={
                            "text-2xl text-center xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 "
                        }
                    >
                        Get A Quote
                    </h1>
                    <p className="text-sm xs:text-base xl:text-lg max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-3xl mt-8 md:mt-8 text-center mx-auto">
                        Territory Insurance Brokers are here for you every step of the way.<br/><br/>
                        If you are interested in any of the mentioned insurance products, request an obligation free
                        quote today.<br/>
                        <br/>
                        Fill out the form, and we will take care of the rest!
                    </p>
                </div>
                <div className="max-w-6xl y-margin mx-auto xl:rounded-b mt-16">
                    <Form/>
                </div>
            </Layout>
        </>
    );
};

const phoneValidation =
    /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
const abn = /^(\d *?){11}$/;
const dob = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
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
    business: yup.string().max(64, "Business name is too long"),
    abn: yup.string().matches(abn, "ABN number must be valid"),
    address: yup.string(),
    fax: yup.string().matches(phoneValidation, "Fax number must be valid"),
    emailAddress: yup.string().email("Email address must be valid"),
    phoneNumber: yup.string().matches(phoneValidation, "Phone number must be valid"),
    privacy: yup.boolean().isTrue(),
    message: yup
        .string()
        .min(10, "Message is too short")
        .max(500, "Message is too long")
        .required("Message is required"),
});

const Form = () => {
    const router = useRouter();
    const initialValues = {
        firstName: "",
        lastName: "",
        business: "",
        abn: "",
        phoneNumber: "",
        address: "",
        emailAddress: "",
        website: "",
        fax: "",
        product: router.query.id || "Business Insurance",
        preferredContact: "phone",
        message: "",
        privacy: false
    };
    return (
        <div className="bg-white px-2 overflow-hidden xl:rounded-b">
            <div className="relative mx-auto max-w-3xl xl:mb-20">
                <Formik
                    onSubmit={(values, actions) => {
                        fetch("/", {
                            method: "POST",
                            headers: {"Content-Type": "application/x-www-form-urlencoded"},
                            body: encode({"form-name": "quote-form123", ...values}),
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
                          setFieldValue,
                          handleSubmit,
                          handleChange,
                          handleBlur,
                      }) => (
                        <form
                            name={"quote-form123"}
                            data-netlify={true}
                            netlify-honeypot="bot-field"
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2  sm:gap-x-8"
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
                            <div>
                                <label
                                    htmlFor="business"
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
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.business && (
                                        <span className="text-xs text-gray-500">
                      {errors.business}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="abn"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    ABN #
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.abn}
                                        type="text"
                                        name="abn"
                                        id="abn"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.abn && (
                                        <span className="text-xs text-gray-500">{errors.abn}</span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phoneNumber}
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                        placeholder="+61 400-123-456"
                                    />
                                    {errors.phoneNumber && (
                                        <span className="text-xs text-gray-500">
                      {errors.phone}
                    </span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address}
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.address && (
                                        <span className="text-xs text-gray-500">
                      {errors.address}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="emailAddress"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.emailAddress}
                                        id="emailAddress"
                                        name="emailAddress"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.emailAddress && (
                                        <span className="text-xs text-gray-500">
                      {errors.email}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Website
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.website}
                                        type="text"
                                        name="website"
                                        id="website"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.website && (
                                        <span className="text-xs text-gray-500">
                      {errors.website}
                    </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="fax"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Fax
                                </label>
                                <div className="mt-1">
                                    <input
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fax}
                                        type="text"
                                        name="fax"
                                        id="fax"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md outline-none"
                                    />
                                    {errors.fax && (
                                        <span className="text-xs text-gray-500">{errors.fax}</span>
                                    )}
                                </div>
                            </div>
                            <Select setFieldValue={setFieldValue} values={values}/>
                            <div>
                                <label
                                    htmlFor="preferredContact"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Preferred Contact
                                </label>
                                <div className="flex space-x-8">
                                    <div className="flex items-center h-16">
                                        <input
                                            id="contactPhone"
                                            name="contactPhone"
                                            type="checkbox"
                                            checked={values.preferredContact === "phone"}
                                            onChange={() => {
                                                if (values.preferredContact === "email") {
                                                    setFieldValue("preferredContact", "phone");
                                                } else {
                                                    setFieldValue("preferredContact", "email");
                                                }
                                            }}
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor="contactPhone" className="text-sm ml-3">
                                            Phone
                                        </label>
                                    </div>
                                    <div className="flex items-center h-16">
                                        <input
                                            id="contactEmail"
                                            name="contactEmail"
                                            type="checkbox"
                                            checked={values.preferredContact === "email"}
                                            onChange={() => {
                                                if (values.preferredContact === "phone") {
                                                    setFieldValue("preferredContact", "email");
                                                } else {
                                                    setFieldValue("preferredContact", "phone");
                                                }
                                            }}
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor="contactEmail" className="text-sm ml-3">
                                            Email
                                        </label>
                                    </div>
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
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
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
                                    type="button"
                                    onClick={handleSubmit}
                                    className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                                        isValidating || !isValid ? "bg-gray-400" : "bg-blue-400"
                                    } hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
