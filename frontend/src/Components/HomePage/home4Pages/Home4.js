import React from "react";
import useAdsstyle from "./Home4style";

function Home4() {
  const classes = useAdsstyle();

  return (
    <div className={classes.main_section}>
      <div className={classes.section}>
        <div className={classes.background_overlay}></div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.column_wrap}>
                <div className={classes.widget_wrap}>
                  <div className={classes.element}>
                    <h1 className={classes.heading_title}>
                      Take care of your tire 22% off
                    </h1>{" "}
                  </div>
                  <div className={classes.element}>
                    <div className={classes.widget_container}>
                      <p className={classes.heading_para}>
                        This discount is not valid in conjunction with other
                        offers
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.column1}>
              <div className={classes.column_wrap1}>
                <div className={classes.widget_wrap1}>
                  <div className={classes.element1}>
                    <div className={classes.image}>
                      <img
                        src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/tire.png"
                        className={classes.attachment_full}
                        alt=""
                        sizes="(max-width: 476px) 100vw, 476px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4;
