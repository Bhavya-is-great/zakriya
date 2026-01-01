"use client";
import React, { useState } from "react";
import styles from "@/css/home/GetInTouch.module.css";

const GetInTouch = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};

        if (!name.trim()) e.name = "Full name is required";
        if (!email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            e.email = "Enter a valid email";

        if (!phone.trim()) e.phone = "Phone number is required";
        else if (!/^[0-9]{7,15}$/.test(phone))
            e.phone = "Enter a valid phone number";

        if (!company.trim()) e.company = "Company name is required";
        if (!message.trim()) e.message = "Message cannot be empty";

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log({ name, email, phone, company, message });

        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
        setErrors({});
    };

    return (
        <section className={styles.wrapper} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Get In Touch</h2>
                    <p className={styles.text}>
                        Have a project or manpower requirement? Share your details and our
                        team will connect with you.
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.grid}>
                        {/* Name */}
                        <div className={styles.field}>
                            <input
                                type="text"
                                className={`${styles.input} ${errors.name ? styles.invalid : ""
                                    }`}
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && (
                                <span className={styles.error}>{errors.name}</span>
                            )}
                        </div>

                        {/* Email */}
                        <div className={styles.field}>
                            <input
                                type="email"
                                className={`${styles.input} ${errors.email ? styles.invalid : ""
                                    }`}
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <span className={styles.error}>{errors.email}</span>
                            )}
                        </div>

                        {/* Phone */}
                        <div className={styles.field}>
                            <input
                                type="tel"
                                className={`${styles.input} ${errors.phone ? styles.invalid : ""
                                    }`}
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && (
                                <span className={styles.error}>{errors.phone}</span>
                            )}
                        </div>

                        {/* Company */}
                        <div className={styles.field}>
                            <input
                                type="text"
                                className={`${styles.input} ${errors.company ? styles.invalid : ""
                                    }`}
                                placeholder="Company Name"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                            {errors.company && (
                                <span className={styles.error}>{errors.company}</span>
                            )}
                        </div>
                    </div>

                    {/* Message */}
                    <div className={styles.field}>
                        <textarea
                            className={`${styles.textarea} ${errors.message ? styles.invalid : ""
                                }`}
                            rows={4}
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {errors.message && (
                            <span className={styles.error}>{errors.message}</span>
                        )}
                    </div>

                    <button className={styles.button}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;
