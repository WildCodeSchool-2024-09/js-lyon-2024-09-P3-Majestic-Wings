import { useNavigate } from "react-router-dom";

import Registration from "./../components/Registration/Registration";

function RegistrationPage() {
  const navigate = useNavigate();

  const newRegistration = {
    firstname: "",
    lastname: "",
    age: 0,
    mail: "",
    phone_number: "",
    password: "",
  };

  return (
    <Registration
      defaultValue={newRegistration}
      onSubmit={(registrationData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        })
          .then((response) => response.json())
          .then(() => {
            navigate("/login");
          });
      }}
    >
      Ajouter
    </Registration>
  );
}

export default RegistrationPage;
