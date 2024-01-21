import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Contactimg from "../Assets/contact.svg";
import Aos from "aos";
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phonenumber: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch("http://localhost:5001/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Form submitted successfully!");
                setFormData({ name: "", email: "", phonenumber: "" }); // Clear the input fields
            } else {
                console.error("Form submission failed!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div data-aos="fade-up">
                <form onSubmit={handleSubmit}>
                    <section>
                        <div className="d-flex flex-column min-vh-100 justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="m-5 text-center"><h1>Welcome!</h1></div>
                                                <div className="m-5">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="name">Name:</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Enter your name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="email">Email:</label>
                                                        <input
                                                            placeholder="Enter your Email"
                                                            required
                                                            className="form-control"
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="phonenumber">Phone number:</label>
                                                        <input
                                                            placeholder="Enter your Phone number"
                                                            required
                                                            className="form-control"
                                                            type="tel"
                                                            id="phonenumber"
                                                            name="phonenumber"
                                                            value={formData.phonenumber}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="">
                                                        <input id="btn-form" type="submit" className="form-control btn btn-primary mt-3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div id="contact-img">
                                                    <img src={Contactimg} alt="" className="img-fluid p-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
