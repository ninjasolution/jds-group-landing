import React from "react";

function ContactAddress(props) {
  return (
    <div className="text-center">
      <div className="contact-content-column-right text-white xl:absolute top-[100px] end-[100px] text-center mx-auto py-5 max-w-[200px]">
        <div className="mb-10">
          <p className="text-sm">
            TELEGRAPH ROAD
            <br />
            <span style={{ lineHeight: "1.5" }}>NSW, AUSTRALIA 10019</span>
          </p>
        </div>
        <div className="mb-10">
          <h3 className="uppercase text-sm mb-3">Sales gallery</h3>
          <p className="text-sm">
            <span className="InfinityNumber">2129355757</span>
            <br />
            <a href="mailto:info@111W57.com">info@telegraphterraces.com</a>
          </p>
          <p className="text-sm">By appointment only.</p>
        </div>
        <div className="">
          <h3 className="uppercase text-sm mb-3">Press&nbsp;inquiries</h3>
          <p className="text-sm">
            <a href="mailto:press@111w57.com">press@telegraphterraces.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
