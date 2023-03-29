 <div
        onClick={handleClickOpen}
        className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main"
      >
        <div className="top-categories-search">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Search products"
              aria-label="Search products"
              type="text"
              name="searchtxt"
             
            />
            <span className="input-group-btn">
              <button
                className="btn btn-secondary"
                type="submit"
                
              >
                <i className="mdi mdi-file-find" /> Search
              </button>
            </span>
          </div>
        </div>
      </div>

      const Search = styled("div")(({ theme }) => ({

position: "relative",
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
"&:hover": {
backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: 0,
width: "100%",
[theme.breakpoints.up("sm")]: {
marginLeft: theme.spacing(1),
width: "auto",
},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
padding: theme.spacing(0, 2),
height: "100%",
position: "absolute",
pointerEvents: "none",
display: "flex",
alignItems: "center",
justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: "inherit",
"& .MuiInputBase-input": {
padding: theme.spacing(1, 1, 1, 0),
// vertical padding + font size from searchIcon
paddingLeft: `calc(1em + ${theme.spacing(4)})`,
transition: theme.transitions.create("width"),
width: "100%",
[theme.breakpoints.up("sm")]: {
width: "15ch",
"&:focus": {
width: "50ch",
},
},
},
}));

<Search>
                  <SearchIconWrapper>
                    <IoSearch />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
