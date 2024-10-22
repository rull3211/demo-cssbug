import { useState } from "react";
import style from "../styles/refistreringform.module.scss";

interface Props {
  labeltext: string;
  inputname: string;
  options: string[];
}

const InputRadioButton = ({ inputname, labeltext, options }: Props) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("");

  return (
    <section className={style.daFormRadio}>
      <label htmlFor={inputname}>{labeltext}</label>
      {options.map((option) => {
        return (
          <div className={style.daFormRadioAlt}>
            <div>
              <input
                type="radio"
                name={inputname}
                value={option}
                checked={selectedRadioBtn === option}
                onChange={() => setSelectedRadioBtn(option)}
              />{" "}
              {option}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InputRadioButton;
