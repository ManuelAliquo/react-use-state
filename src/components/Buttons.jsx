export default function Buttons({ array, active, setActive }) {
  const showCard = (index) => {
    let newCard;
    newCard = index;
    setActive(newCard);
  };

  return (
    <>
      {array.map((language, index) => (
        <li key={language.id}>
          <button
            className={active === index ? "btn-active" : ""}
            onClick={() => {
              showCard(index);
            }}
          >
            {language.title}
          </button>
        </li>
      ))}
    </>
  );
}
