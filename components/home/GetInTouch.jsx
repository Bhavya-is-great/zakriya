import React from 'react'
import styles from '@/css/home/GetInTouch.module.css'

const GetInTouch = () => {
    return (
        <section className={styles.wrapper} id='contact'>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>Get In Touch</h2>
                    <p className={styles.text}>
                        Have a project or manpower requirement? Share your details and our team will connect with you.
                    </p>
                </div>

                <form className={styles.form}>

                    <div className={styles.grid}>

                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Email Address"
                        />

                        <input
                            type="tel"
                            className={styles.input}
                            placeholder="Phone Number"
                        />

                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Company Name"
                        />

                    </div>

                    <textarea
                        className={styles.textarea}
                        rows={4}
                        placeholder="Your Message"
                    />

                    <button className={styles.button}>
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    )
}

export default GetInTouch
