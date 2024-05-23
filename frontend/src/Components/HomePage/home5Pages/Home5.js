import React from "react";
import useArticaleblog from "./Home5style";

function Home5() {
  const classes = useArticaleblog();

  const blog1 = [
    {
      image:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/06/automotive-car-coupe-dashboard-498694-1280x720.jpg",
      date: "May 20, 2020",
      heading:
        "Electric cars aren’t pollution-free; they have to get their energy from somewhere",
    },
    {
      image:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/05/parked-white-coupe-during-night-3354648-1280x650.jpg",
      date: "May 19, 2020",
      heading:
        "You can know or not know how a car runs and still enjoy riding in a car",
    },
    {
      image:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/05/car-driving-fast-sports-car-18296-1280x650.jpg",
      date: "May 19, 2020",
      heading:
        "Race cars, no matter what size or shape they are, they do the same things. It is not complicated",
    },
  ];

  return (
    <div className={classes.section}>
      <div className={classes.widget_wrap}>
        <div className={classes.section1}>
          <div className={classes.row1}>
            <div className={classes.column1}>
              <div className={classes.widget_wrap1}>
                <div className={classes.element1}>
                  <h2 className={classes.heading_title}>Latest Article</h2>
                </div>
              </div>
            </div>
            <div className={classes.column1}>
              <div className={classes.widget_wrap1}>
                <div className={classes.element2}>
                  <a className={classes.sayara_btn} href="/#">
                    Read Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.section2}>
          <div className={classes.row2}>
            <div className={classes.column3}>
              <div className={classes.column_wrap3}>
                <div className={classes.element3}>
                  <div className={classes.row}>
                    {blog1.map((item,id) => {
                      return (
                        <div className={classes.col_xl_4} key={id}>
                          <div className={classes.blog_item}>
                            <div className={classes.blog_thumb}>
                              <img
                                src={item.image}
                                className={classes.attachment_sayara}
                                alt=""
                              />
                              <span className={classes.date}>{item.date}</span>
                            </div>
                            <div className={classes.blog_content}>
                              <div className={classes.blog_meta}>
                                <img
                                  src="https://secure.gravatar.com/avatar/c1771335bb186bad9c54bcb67ae8adba?s=96&amp;d=mm&amp;r=g"
                                  alt=""
                                  className={classes.image2}
                                />
                                <span className={classes.pr_10}> - admin</span>|
                                <span className={classes.pl_11}>
                                  Body Parts
                                </span>
                              </div>
                              <h4 className={classes.bottom_heading}>
                                {item.heading}
                              </h4>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default Home5;
