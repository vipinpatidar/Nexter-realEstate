import { useState } from "react";

//css
import "./FandQ.scss";
//data
import { fAndQ } from "../../data/data";
//icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FandQ = () => {
  const [allQueAns, setAllQueAns] = useState(fAndQ);

  const toggleHandler = (id) => {
    const newFandQ = allQueAns.map((fAndQ) => {
      return fAndQ.id === id
        ? { ...fAndQ, isOpen: !fAndQ.isOpen }
        : { ...fAndQ, isOpen: false };
    });

    setAllQueAns(newFandQ);
  };

  return (
    <div className="fandQ">
      <h2 className="heading-2">Frequently Asked Questions</h2>
      <div className="fandQ_flex">
        {allQueAns.map((queAns) => (
          <div className="fandQ_innerFlex" key={queAns.id}>
            <h6
              className="heading-4 fandQ_que"
              onClick={() => toggleHandler(queAns.id)}
            >
              <span>
                {queAns.isOpen ? (
                  <MdKeyboardArrowDown className="fandQ_icons" />
                ) : (
                  <MdKeyboardArrowUp className="fandQ_icons" />
                )}
              </span>{" "}
              <span>{queAns.que}</span>
            </h6>
            <p className={`fandQ_answer ${queAns.isOpen ? "open" : ""}`}>
              {queAns.ans}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FandQ;
