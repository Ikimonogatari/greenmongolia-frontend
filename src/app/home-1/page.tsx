import AboutV1 from "@/components/about/AboutV1";
import BannerV3GraphQL from "@/components/banner/BannerV3GraphQL";
import BenefitsV1 from "@/components/benefits/BenefitsV1";
import ContactV1 from "@/components/contact/ContactV1";
import GalleryV1GraphQL from "@/components/gallery/GalleryV1GraphQL";
import LayoutV1 from "@/components/layouts/LayoutV1";
import NewsSection from "@/components/news/NewsSection";
import ServiceV1GraphQL from "@/components/services/ServiceV1GraphQL";
import TestimonialV1 from "@/components/testimonials/TestimonialV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
  title: "Green Mongolia Hub NGO | UNCCD",
};

const Home1 = () => {
  return (
    <>
      <LayoutV1>
        <BannerV3GraphQL />
        <AboutV1 />
        <ServiceV1GraphQL hasTitle={true} />
        <BenefitsV1 />
        <TestimonialV1 />
        <GalleryV1GraphQL />
        <WhyChooseV1 sectionClass="default-padding-bottom" />
        <ContactV1 />
        <NewsSection />
      </LayoutV1>
    </>
  );
};

export default Home1;
