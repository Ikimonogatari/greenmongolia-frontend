"use client"
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { useSubmitContactMutation } from '@/store/api/contactsApi';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactV1 = () => {
    const t = useTranslations("Contact");
    const tFooter = useTranslations("Footer");
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
            toast.error(t("form.validationError"));
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
            toast.success(t("form.successMessage"));
        } catch (error: unknown) {
            // Error handling
            console.error("Error submitting contact form:", error);
            let errorMessage = t("form.errorMessage");
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
            <div className="contact-area overflow-hidden bg-gray default-padding">
                <div className="sahpe-right-bottom">
                    <Image src="/assets/img/shape/16.png" alt="Image Not Found" width={290} height={500} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-xl-6 col-lg-7">
                            <div className="contact-form-style-one mb-md-50">
                                <Image src="/assets/img/illustration/10.png" alt="Image Not Found" width={360} height={600} />
                                <h5 className="sub-title">{t("form.subTitle")}</h5>
                                <h2 className="heading">{t("form.title")}</h2>

                                <form className="contact-form contact-form" onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder={t("form.namePlaceholder")} type="text" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder={t("form.emailPlaceholder")} type="email" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control no-arrows" id="phone" name="phone" placeholder={t("form.phonePlaceholder")} type="number" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder={t("form.messagePlaceholder")} required autoComplete='off' />
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
                                                {isSubmitting ? t("form.sending") : t("form.submitButton")}
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

                        <div className="col-tact-stye-one col-xl-5 offset-xl-1 col-lg-5">
                            <div className="contact-style-one-info text-light">
                                <h2>
                                    {t("info.title")} <span>{t("info.titleSuffix")}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{ animationPlayState: 'running' }} /></svg>
                                </h2>
                                <p>
                                    {t("info.description")}
                                </p>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <h5 className="title">{t("info.phoneTitle")}</h5>
                                            <a href={`tel:${tFooter("contactInfo.phoneValue")}`}>{tFooter("contactInfo.phoneValue")}</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h5 className="title">{t("info.addressTitle")}</h5>
                                            <p>
                                                {tFooter("contactInfo.addressValue")}
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h5 className="title">{t("info.emailTitle")}</h5>
                                            <a href={`mailto:${tFooter("contactInfo.emailValue")}`}>{tFooter("contactInfo.emailValue")}</a>
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

export default ContactV1;