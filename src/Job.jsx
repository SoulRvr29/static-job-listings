const Job = ({
  company,
  position,
  isNew,
  featured,
  postedAt,
  contract,
  location,
  languages,
  logo,
}) => {
  return (
    <section className={isNew ? "left-border" : ""}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="data">
        <ul>
          <li>
            <span className="company">{company}</span>{" "}
            {isNew ? <span className="new">NEW!</span> : ""}
            {featured ? <span className="featured">FEATURED</span> : ""}
          </li>
          <li className="position">{position}</li>
          <li>
            <span className="third-line">{postedAt}</span>{" "}
            <span className="third-line">{contract}</span>{" "}
            <span className="third-line">{location}</span>
          </li>
        </ul>
      </div>
      <div className="languages">
        {languages.map((lang) => (
          <div className="lang">{lang}</div>
        ))}
      </div>
    </section>
  );
};

export default Job;
