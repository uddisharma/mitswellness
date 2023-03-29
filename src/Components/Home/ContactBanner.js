import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function InputSubscription() {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <div className="container">
      <form className="ContactBanner" onSubmit={handleSubmit} id="demo">
        <FormControl className="Contactform">
          <FormLabel
            sx={(theme) => ({
              "--FormLabel-color": theme.vars.palette.primary.plainColor,
            })}
          >
            {/* MUI Newsletter */}
            <div className="col-md-12">
              <div className="main-title-tt">
                <div className="main-title-left">
                  {/* <span>CONCERNS</span> */}
                  <h2 style={{ color: "#e72771" }}>
                    Subscribe to our Newsletter
                  </h2>
                  <h6>
                    Promotions, new products and sales. Directly to your inbox.
                  </h6>
                </div>
              </div>
            </div>
          </FormLabel>
          <Input
            sx={{ "--Input-decoratorChildHeight": "45px" }}
            placeholder="Enter your email address"
            type="email"
            required
            value={data.email}
            onChange={(event) =>
              setData({ email: event.target.value, status: "initial" })
            }
            error={data.status === "failure"}
            endDecorator={
              <Button
                style={{ backgroundColor: "#e72771" }}
                variant="solid"
                color="primary"
                loading={data.status === "loading"}
                type="submit"
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Subscribe
              </Button>
            }
          />
          {data.status === "failure" && (
            <FormHelperText
              sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
            >
              Oops! something went wrong, please try again later.
            </FormHelperText>
          )}

          {data.status === "sent" && (
            <FormHelperText
              sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
            >
              You are all set!
            </FormHelperText>
          )}
        </FormControl>
      </form>
    </div>
  );
}
