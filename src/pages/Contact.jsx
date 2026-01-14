import "../styles/contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_1ypql39",
            "template_e0vzy2f",
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            "FfJQBN_BxNCF2wqmk"
        )
        .then(() => {
            alert("Message sent successfully!");
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error("Email send failed:", error);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <div className="contactSection">
            <h1 className="contactTitle">Get In Touch</h1>
            <div className="contactContainer">
                <div className="contactCards">
                    <div className="contactCard">
                        <div className="contactIcon">📱</div>
                        <div className="contactInfo">
                            <h3>Phone</h3>
                            <p>08179679284 (Mobile)</p>
                        </div>
                    </div>

                    <div className="contactCard">
                        <div className="contactIcon">📧</div>
                        <div className="contactInfo">
                            <h3>Email</h3>
                            <p>syedimranahmed307@gmail.com</p>
                        </div>
                    </div>

                    <div className="contactCard">
                        <div className="contactIcon">💼</div>
                        <div className="contactInfo">
                            <h3>GitHub</h3>
                            <a href="https://github.com/SyedImranML" target="_blank" rel="noopener noreferrer">
                                github.com/SyedImranML
                            </a>
                        </div>
                    </div>

                    <div className="contactCard">
                        <div className="contactIcon">🔗</div>
                        <div className="contactInfo">
                            <h3>IEEE Membership</h3>
                            <p>ID: 98152892</p>
                        </div>
                    </div>
                </div>

                <div className="contactFormSection">
                    <div className="formCard">
                        <h2>Send Me a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="formGroup">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submitButton">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
