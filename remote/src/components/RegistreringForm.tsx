import style from "../styles/refistreringform.module.scss";
import InputRadioButton from "./InputRadioButton";
import InputText from "./InputText";

export default function RegistreringForm() {
  return (
    <form className={style.daForm}>
      <InputText inputname="fornavn" labeltext="Fornavn" />
      <InputText inputname="etternavn" labeltext="Etternavn" />
      <InputRadioButton
        inputname="ensligMindrearig"
        labeltext="Enslig mindreårig"
        options={["Ja", "Nei"]}
      />
      <InputRadioButton
        inputname="mindrearigMedfolgeAvVoksen"
        labeltext="Mindreårig i følge med voksen"
        options={["Ja", "Nei"]}
      />
      <div className={style.daFormFields}>
        <label>Ankomsttidspunkt</label>
        <input type="datetime-local" name="dato" min="2024-08-01T00:0" />
      </div>
      <InputText inputname="stemning" labeltext="Stemning" />
      <button type="submit" className={style.daFormButton}>
        Lagre person
      </button>
    </form>
  );
}
