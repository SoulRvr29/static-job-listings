const Job = ({ addFilter, data }) => {
  return (
    <section className={data.new ? "left-border" : ""}>
      <div className="logo">
        <img src={data.logo} alt="logo" />
      </div>
      <div className="data">
        <div className="first-line-container">
          <span className="company">{data.company}</span>{" "}
          {data.new ? <span className="new">NEW!</span> : ""}
          {data.featured ? <span className="featured">FEATURED</span> : ""}
        </div>
        <div className="second-line-container">{data.position}</div>
        <div className="third-line-container">
          <span className="third-line">{data.postedAt}</span>{" "}
          <span className="third-line">{data.contract}</span>{" "}
          <span className="third-line">{data.location}</span>
        </div>
      </div>
      <div className="itemsList">
        <div className="item" onClick={() => addFilter(data.role)}>
          {data.role}
        </div>
        <div className="item" onClick={() => addFilter(data.level)}>
          {data.level}
        </div>
        {data.languages.map((lang) => (
          <div key={lang} className="item" onClick={() => addFilter(lang)}>
            {lang}
          </div>
        ))}
        {data.tools.map((tool) => (
          <div key={tool} className="item" onClick={() => addFilter(tool)}>
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Job;
