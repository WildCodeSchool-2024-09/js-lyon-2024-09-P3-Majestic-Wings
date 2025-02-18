import "./Registration.css";
import { toast } from "react-toastify";

import type { ReactNode } from "react";
type RegistrationData = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  mail: string;
  phone_number: string;
  password: string;
};
interface RegistrationFormData {
  defaultValue: RegistrationData;
  children: ReactNode;
  onSubmit: (user: RegistrationData) => void;
}
function Registration({
  defaultValue,
  children,
  onSubmit,
}: RegistrationFormData) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const id = formData.get("id") as unknown as number;
        const firstname = formData.get("firstname") as string;
        const lastname = formData.get("lastname") as string;
        const age = formData.get("age") as unknown as number;
        const mail = formData.get("mail") as string;
        const phone_number = formData.get("phone_number") as string;
        const password = formData.get("password") as string;
        if (password.length < 6) {
          toast.error("votre password doit contenir plus de 6 caractère");
          return;
        }
        if (firstname.length < 4) {
          toast.error("votre Prenom doit contenir plus de 4 caractère");
          return;
        }
        if (lastname.length < 4) {
          toast.error("votre Nom doit contenir plus de 4 caractère");
          return;
        }
        onSubmit({
          id,
          firstname,
          lastname,
          age,
          mail,
          phone_number,
          password,
        });
      }}
      className="form-all"
      action=""
    >
      <h1 className="title">Inscription</h1>
      <div className="form-container">
        <div className="input-column">
          <label>
            Prénom
            <input
              type="text"
              name="firstname"
              required
              defaultValue={defaultValue.firstname}
            />
          </label>

          <label>
            Nom
            <input
              type="text"
              name="lastname"
              required
              defaultValue={defaultValue.lastname}
            />
          </label>

          <label>
            Âge
            <input
              type="number"
              name="age"
              min="18"
              required
              defaultValue={defaultValue.age}
            />
          </label>
        </div>

        <div className="input-column">
          <label>
            Email
            <input
              type="email"
              name="mail"
              required
              defaultValue={defaultValue.mail}
            />
          </label>

          <label>
            Téléphone
            <input
              type="tel"
              name="phone_number"
              required
              defaultValue={defaultValue.phone_number}
            />
          </label>

          <label>
            Mot de passe
            <input
              type="password"
              name="password"
              required
              defaultValue={defaultValue.password}
            />
          </label>
        </div>
      </div>

      <button type="submit" className="explore-button">
        {children}
      </button>
    </form>
  );
}
export default Registration;
