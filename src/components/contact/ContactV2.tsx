"use client"
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useSubmitContactMutation } from '@/store/api/contactsApi';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactV2 = () => {
    const [submitContact, { isLoading: isSubmitting }] = useSubmitContactMutation();

    const handleForm: FormEventHandler = async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        
        // Extract form values
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const comments = formData.get('comments') as string; // Maps to "about" field

        // Validate required fields
        if (!name || !email || !phone || !comments) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            // Submit contact form to Directus
            await submitContact({
                name,
                email,
                phone,
                about: comments, // Map "comments" field to "about"
                status: "published",
            }).unwrap();

            // Success - reset form and show success message
            form.reset();
            toast.success("Thanks For Your Message! We'll get back to you soon.");
        } catch (error: unknown) {
            // Error handling
            console.error("Error submitting contact form:", error);
            let errorMessage = "Failed to send message. Please try again.";
            if (error && typeof error === 'object') {
                if ('data' in error && error.data && typeof error.data === 'object' && 'message' in error.data) {
                    errorMessage = String(error.data.message);
                } else if ('message' in error) {
                    errorMessage = String(error.message);
                }
            }
            toast.error(errorMessage);
        }
    }

    return (
        <>
            <div className="contact-area contact-page overflow-hidden bg-gray default-padding">
                <div className="sahpe-right-bottom">
                    <Image src="/assets/img/shape/16.png" alt="Image Not Found" width={290} height={500} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-xl-7 col-lg-7">
                            <div className="contact-form-style-one mb-md-50">
                                <Image src="/assets/img/illustration/10.png" alt="Image Not Found" width={360} height={600} />
                                <h5 className="sub-title">Have Questions?</h5>
                                <h2 className="heading">Send us a massage</h2>

                                <form className="contact-form contact-form" onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control no-arrows" id="phone" name="phone" placeholder="Phone" type="number" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" required autoComplete='off' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button 
                                                type="submit" 
                                                name="submit" 
                                                id="submit"
                                                disabled={isSubmitting}
                                            >
                                                <i className="fa fa-paper-plane" /> 
                                                {isSubmitting ? "Sending..." : "Get in Touch"}
                                            </button>
                                        </div>
                                    </div>
                                    {/* Alert Message */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-tact-stye-one col-xl-5 col-lg-5 pl-80 pl-md-15 pl-xs-15">
                            <div className="contact-style-one-info">
                                <h2>
                                    Contact
                                    <span>
                                        Information
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{ animationPlayState: 'running' }} /></svg>
                                    </span>
                                </h2>
                                <p>
                                    Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                                </p>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <h5 className="title">Hotline</h5>
                                            <a href="tel:4733378901">+4733378901</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h5 className="title">Our Location</h5>
                                            <p>
                                                55 Main Street, The Grand Avenue 2nd Block, <br /> New York City
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h5 className="title">Official Email</h5>
                                            <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV2;