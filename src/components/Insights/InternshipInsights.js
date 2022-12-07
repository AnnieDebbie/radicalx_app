import React from "react";
import classes from "./InternshipInsights.module.css";

const InternshipInsights = () => {
  return (
    <div className={classes["internship-insights-container"]}>
      <h4 className={classes["internship-insights-heading"]}>Internship insights</h4>
      <p className={classes["internship-insights-content"]}>
        In the eighteenth century the German philosopher Immanuel Kant developed
        a theory of knowledge in which knowledge about space can be both a
        priori and synthetic.
      </p>
    </div>
  );
};

export default InternshipInsights;
