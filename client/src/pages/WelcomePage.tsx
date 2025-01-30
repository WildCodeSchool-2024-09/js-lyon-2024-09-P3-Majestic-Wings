import Button_Discover from "../components/Button_Discover/Button_Discover";
import Header from "../components/Header/Header";

import Our_Planes from "../components/Our_Planes/Our_Planes";
import Our_Prestations from "../components/Our_Prestations/Our_Prestations";
import SearchBar from "../components/SearchBar/SearchBar";
import AirportMapPage from "./AirportMapPage";

export default function WelcomePage() {
  return (
    <>
      <Header />
      <SearchBar />
      <Our_Planes />
      <Our_Prestations />
      <AirportMapPage />
      <Button_Discover />
    </>
  );
}
