import "./App.css";
import Entry from "./components/Entry";
import { Header } from "./components/Header";
import data from "./data";

export default function App() {
  const entry = data.map((item) => (
    <Entry
      key={item.id}
      {...item}
      // img={item.img}
      // title={item.title}
      // country={item.country}
      // googleMapsLink={item.googleMapsLink}
      // dates={item.dates}
      // text={item.text}

      // item={item}
    />
  ));

  return (
    <>
      <Header />
      <main className="container">
        {entry}
      </main>
    </>
  );
}
