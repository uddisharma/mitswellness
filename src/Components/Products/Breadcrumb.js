import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function BreadCrumb({ previous, previouslink, current }) {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          style={{ fontSize: "16px" }}
          underline="hover"
          color="inherit"
          to="/"
        >
          <strong>
            <span className="mdi mdi-home" />
          </strong>
          Home
        </Link>
        <Link
          style={{ fontSize: "16px" }}
          underline="hover"
          color="inherit"
          to={`/${previouslink}`}
        >
          {previous}
        </Link>

        <Typography style={{ fontSize: "16px" }} color="text.primary">
          {current}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
