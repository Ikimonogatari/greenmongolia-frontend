import FooterV1 from "../footer/FooterV1";
import HeaderTopV2 from "../header/HeaderTopV2";
import HeaderV2 from "../header/HeaderV2";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV2 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderTopV2 />
            <HeaderV2 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV2;
