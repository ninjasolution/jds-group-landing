import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { states } from "../../../data/States";
function ContactForm(props) {
  const { countries } = useCountries();
  return (
    <form action="" className="max-w-[600px] mx-auto p-8 text-white">
      <h3 className="text-center text-white">REGISTER</h3>
      <p className="text-[13px] mt-5 text-center mb-2">*Required fields</p>
      <div className="input_group">
        <input
          type="text"
          name="first_name"
          required
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="FIRST NAME*"
        />
      </div>

      <div className="input_group">
        <input
          type="text"
          name="last_name"
          required
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="LAST NAME*"
        />
      </div>

      <div className="input_group">
        <input
          type="text"
          name="address"
          required
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="ADDRESS"
        />
      </div>

      <div className="input_group">
        <div className="custom_select">
          <Select
            required
            label="STATE"
            className="bg-[#8E8F90] !border-none !outline-none shadow-none w-full text-[13px] h-9 !text-white p-[5px_10px] mb-2 placeholder:text-white"
          >
            {states.map((state) => (
              <Option key={state}>{state}</Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex items-center">
        <div className="input_group flex-1">
          <input
            type="text"
            required
            name="city"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder="CITY"
          />
        </div>
        <div className="input_group w-[130px]">
          <input
            type="text"
            required
            name="zip"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder="ZIP"
          />
        </div>
      </div>

      <div className="input_group">
        <div className="custom_select">
          <Select
            required
            label="Select Country"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            {countries.map(({ name, flags }) => (
              <Option
                key={name}
                value={name}
                className="flex items-center gap-2"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="input_group">
        <input
          required
          type="email"
          name="email"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="E-MAIL*"
        />
      </div>
      <div className="input_group">
        <input
          required
          type="number"
          name="contact_number"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="CONTACT NUMBER*"
        />
      </div>
      <div className="input_group">
        <div className="custom_select">
          <Select
            required
            label="HOW DID YOU HEAR ABOUT US?"
            className="bg-[#8E8F90] !border-none !outline-none shadow-none w-full text-[13px] h-9  !text-white p-[5px_10px] mb-2 placeholder:text-white"
          >
            <Option>CURBED.COM</Option>
            <Option>EBLAST</Option>
            <Option>EVENTS</Option>
            <Option>NEWSPAPERS/MEGAZINE</Option>
            <Option>NY TIMES.COM</Option>
            <Option>ONLINE SEARCH</Option>
            <Option>REAL DEAL</Option>
            <Option>REFERRAL</Option>
            <Option>SITE SIGNAGE</Option>
          </Select>
        </div>
      </div>
      <div className="input_group">
        <div className="flex items-center justify-between">
          <span className="text-sm">Are you a broker?</span>
          <div className="flex items-center">
            <div className="mx-3">
              <input type="radio" required name="broker" id="broker_yes" />
              <label htmlFor="broker_yes" className="text-sm ms-1">
                Yes
              </label>
            </div>
            <div className="">
              <input type="radio" required name="broker" id="broker_no" />
              <label htmlFor="broker_no" className="text-sm ms-1">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="input_group text-center mt-6 ">
        <button className="inline-block p-[8px_20px] transition-colors text-sm bg-white hover:bg-primary-2 text-black hover:text-white">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
