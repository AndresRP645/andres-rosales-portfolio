export default function Terminal({ dir, children }) {
  return (
    <>
      <div className="Terminal">
        <div className="Terminal__Toolbar">
          <div className="Toolbar__buttons">
            <button className="Toolbar__button Toolbar__button--exit">
              &#10005;
            </button>
            <button className="Toolbar__button">&#9472;</button>
            <button className="Toolbar__button">&#9723;</button>
          </div>
          <p className="Toolbar__user">andres@kali:/{dir}</p>
        </div>
        <div className="Terminal__body">{children}</div>
      </div>
    </>
  );
}
