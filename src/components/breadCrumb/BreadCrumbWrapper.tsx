"use client";
import BreadCrumb from "./BreadCrumb";

interface BreadCrumbWrapperProps {
  titleKey: string;
  breadCrumbKey: string;
}

const BreadCrumbWrapper = ({
  titleKey,
  breadCrumbKey,
}: BreadCrumbWrapperProps) => {
  return <BreadCrumb title={titleKey} breadCrumb={breadCrumbKey} />;
};

export default BreadCrumbWrapper;
