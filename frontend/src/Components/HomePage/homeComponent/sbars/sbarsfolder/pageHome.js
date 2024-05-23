import React from "react";
import { BrandData, SearchBarBrand } from "./searchbarcompo";
import { VehicleType, SearchBarType } from "./searchbarcompo2";
import { CarColour, SearchBarColour } from "./searchbarcompo3";
import SearchButton from "../searchbtn";
import useStyles from "./sbar1.style";

export default function PageHome() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.homepage1}>
        <div className={classes.text}>
          <br />
          <br />
          <br />
          <h1>Find Parts For Your Vehicle</h1>
          <p>Over Hundreds of Brands and Tens of Thousand of Parts</p>
        </div>
        <div className={classes.searchbars}>
          <SearchBarBrand placeHolder="Brand" data={BrandData} />
          <SearchBarType placeholder="Vehicle Type" data={VehicleType} />
          <SearchBarColour placeholder="Colour" data={CarColour} />
          <div className={classes.searchbtn1}>
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  );
}
