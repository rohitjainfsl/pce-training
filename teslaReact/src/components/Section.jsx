/* eslint-disable react/prop-types */
function Section(props) {
  return (
    <section style={{ backgroundImage: "url(images/" + props.photo + ")" }}>
      <div id="top">
        <h1>{props.heading}</h1>
        <p>{props.tagline}</p>
      </div>
      <div id="bottom">
        <div className="cta">
          <button>{props.leftBtn}</button>
          {props.rightBtn ? <button>{props.rightBtn}</button> : ""}
        </div>
        {props.downArrow ? (
          <img src={`images/${props.downArrow}`} alt="" />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Section;
