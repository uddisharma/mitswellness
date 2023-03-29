import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "../../Styles/Global.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Stats() {
  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <div
          className="grid"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        >
          <div item xs={6}>
            <div>
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>Dontation</span>
                    <h2>Spreading Smiles One Child At A Time</h2>
                  </div>
                </div>
              </div>
              <h3 style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat quia voluptatum itaque quo cumque deleniti dolorum
                quas, amet nisi molestias eaque quam officia hic laborum
                excepturi? Temporibus, esse! Quibusdam exercitationem in,
                dolorem sapiente nemo accusantium et labore cupiditate, unde,
                animi ad veniam dolorum dolores dignissimos quia voluptates illo
                veritatis suscipit natus. Culpa quam aliquid vel tempora eveniet
                quae sed sequi repudiandae repellendus obcaecati ratione
                accusamus numquam, ipsa adipisci vitae deleniti qui, non
                aperiam. Molestiae ipsa perferendis a soluta voluptatum quos
                voluptatem, rerum dolorem quasi, sed consequuntur deleniti
                temporibus, ab omnis quibusdam! Id nulla placeat sequi ut
                consequatur nam vel atque!
              </h3>
            </div>
          </div>
          <div item xs={6}>
            <div>
              <img
                className="statimg"
                src="https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ngo.jpg?v=1660122740"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
