import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
function ContactForm(props) {
  return (
    <form action="" className="max-w-[600px] mx-auto p-8 text-white">
      <h3 className="text-center text-white">REGISTER</h3>
      <p className="text-[13px] mt-5 text-center mb-2">*Required fields</p>
      <div className="input_group">
        <input
          type="text"
          name="first_name"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="FIRST NAME*"
        />
      </div>

      <div className="input_group">
        <input
          type="text"
          name="last_name"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="LAST NAME*"
        />
      </div>

      <div className="input_group">
        <input
          type="text"
          name="address"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="ADDRESS"
        />
      </div>

      <div className="input_group">
        {/* <input
          type="text"
          name="state"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="STATE"
        /> */}
        <select
          name="state"
          id="state"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
        >
          <option value=""></option>
        </select>
      </div>

      <div className="flex items-center">
        <div className="input_group flex-1">
          <input
            type="text"
            name="city"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder="CITY"
          />
        </div>
        <div className="input_group w-[130px]">
          <input
            type="text"
            name="zip"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder="ZIP"
          />
        </div>
      </div>

      <div className="input_group">
        <input
          type="text"
          name="country"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="COUNTRY"
        />
      </div>

      <div className="input_group">
        <input
          type="email"
          name="email"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="E-MAIL*"
        />
      </div>
      <div className="input_group">
        <input
          type="number"
          name="contact_number"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder="CONTACT NUMBER*"
        />
      </div>
      <div className="input_group">
        <div className="custom_select">
          <Select
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
              <input type="radio" name="broker" id="broker_yes" />
              <label htmlFor="broker_yes" className="text-sm ms-1">
                Yes
              </label>
            </div>
            <div className="">
              <input type="radio" name="broker" id="broker_no" />
              <label htmlFor="broker_no" className="text-sm ms-1">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="input_group text-center mt-6 ">
        <button className="inline-block p-[5px_20px] text-sm bg-white hover:bg-primary-2 text-black hover:text-white">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
