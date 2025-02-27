"use client";

import { useState } from "react";
import Select from "react-select";
import { components } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { countries } from "@/utils/constant";
interface CountrySelectProps {
  setCountry: (country: { value: string; label: string } | null) => void;
}

// Extensive list of countries
countries.sort((a, b) => a.label.localeCompare(b.label));

// Custom Option component
const Option = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center">
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
          marginRight: "0.5em",
        }}
        title={props.data.label}
      />
      {props.data.label}
    </div>
  </components.Option>
);

// Custom SingleValue component
const SingleValue = ({ children, ...props }: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center">
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
          marginRight: "0.5em",
        }}
        title={props.data.label}
      />
      {children}
    </div>
  </components.SingleValue>
);

export default function CountrySelect({ setCountry }: CountrySelectProps) {
  const [selectedCountry, setSelectedCountry] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const handleChange = (country: any) => {
    setCountry(country.value);
    setSelectedCountry(country);
  };
  return (
    <div className="w-full ">
      <Select
        options={countries}
        components={{ Option, SingleValue }}
        className="text-sm"
        classNamePrefix="country-select"
        placeholder="Select a country"
        aria-label="Select a country"
        value={selectedCountry}
        onChange={handleChange} // Fixed onChange
      />
    </div>
  );
}
