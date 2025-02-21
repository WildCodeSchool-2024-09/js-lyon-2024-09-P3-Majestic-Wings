import "./Profile.css";
import { toast } from "react-toastify";

import type { ReactNode } from "react";

type ProfileData = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  phone_number: string;
};
interface ProfileFormData {
  defaultValue: ProfileData;
  children: ReactNode;
  onSubmit: (user: ProfileData) => void;
}

function Profile({ defaultValue, children, onSubmit }: ProfileFormData) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const id = formData.get("id") as unknown as number;
        const firstname = formData.get("firstname") as string;
        const lastname = formData.get("lastname") as string;
        const age = formData.get("age") as unknown as number;
        const phone_number = formData.get("phone_number") as string;
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
          phone_number,
        });
      }}
      className="form-all"
      action=""
    >
      <h1 className="title">Modifier vos informations</h1>
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
        </div>

        <div className="input-column">
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
      </div>

      <button type="submit" className="explore-button">
        {children}
      </button>
    </form>
  );
}
export default Profile;
