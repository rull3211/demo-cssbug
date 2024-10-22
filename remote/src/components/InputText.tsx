import style from "../styles/refistreringform.module.scss";

interface Props {
  labeltext: string;
  inputname: string;
}

const InputText = ({ inputname, labeltext }: Props) => {
  return (
    <section className={style.daFormFields}>
      <label id={inputname}>{labeltext}</label>
      <input type="text" name={inputname} />
    </section>
  );
};

export default InputText;
