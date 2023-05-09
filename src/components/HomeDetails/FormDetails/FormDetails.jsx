import { useState } from "react";

//css
import "./FormDetails.scss";

const FormDetails = () => {
  const [hideCheck, setHideCheck] = useState(true);
  const [blink, setBlink] = useState(true);

  const personHandler = () => {
    setHideCheck(true);
    setBlink(false);

    setTimeout(() => {
      setBlink(true);
    }, 100);
  };
  const videoHandler = () => {
    setHideCheck(false);
    setBlink(false);

    setTimeout(() => {
      setBlink(true);
    }, 100);
  };

  return (
    <div className="formDetails">
      <div className="formDetails_btn_flex">
        <button
          className="btn"
          style={{
            border: `${hideCheck ? "1px solid #000" : "1px solid #d7d7d7"}`,
          }}
          onClick={personHandler}
        >
          In Person
        </button>
        <button
          className="btn"
          style={{
            border: `${hideCheck ? "1px solid #d7d7d7" : "1px solid #000"}`,
          }}
          onClick={videoHandler}
        >
          Video Chat
        </button>
      </div>
      {/* form */}
      <div
        className="formDetails_left"
        style={{
          opacity: `${blink ? "1" : "0"}`,
        }}
      >
        <div className="formDetails_flexCol">
          <div className="formDetails_input_flexCol">
            <input type="text" placeholder="Time" id="fName" />
          </div>
          <div className="formDetails_input_flexCol">
            <input type="text" placeholder="Your Name" id="lName" />
          </div>
          <div className="formDetails_input_flexCol">
            <input type="tel" placeholder="Phone Number" id="email" />
          </div>
          <div className="formDetails_input_flexCol">
            <input type="email" placeholder="Your Email" id="email" />
          </div>
          <div className="formDetails_input_flexCol">
            <textarea
              placeholder="Enter Your Message..."
              id="message"
              rows="6"
              cols="10"
            />
          </div>
          {hideCheck && (
            <div className="formDetails_check">
              <input type="checkbox" name="check" id="check" />
              <p className="check_pera">
                By submitting this form I agree to Terms of Use
              </p>
            </div>
          )}
          <button className="btn formDetails_btn">Submit a tour request</button>
        </div>
      </div>

      {/* right */}
    </div>
  );
};

export default FormDetails;
