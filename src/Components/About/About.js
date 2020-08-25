import React, { useState } from "react";

import "./about.scss";

const About = () => {
  const [readMore, setReadMore] = React.useState(false);

  const readMoreHandler = () => {
    setReadMore((prevMode) => !prevMode);
  };

  return (
    <section id="aboutMeApp" className="container-about-this-app" tabindex="-1">
      <div className="overlay-about-this"></div>
      <div className="title-about-this">
        <h1>
          About
          <span className="span-one">
            <span className="span-two">This App</span>
          </span>
        </h1>
      </div>
      <div className="intro-container-about">
        <div className="left-content-this">
          <div className="left-container-title-this">
            <h3>
              React, Redux, and GraphQL App
              <br />
              Helena Charis Online Store
            </h3>
          </div>
          <div className="left-container-text">
            <p>Featuring Firebase, GraphQL, Stripe, React, and Redux.</p>
            <p>
              Fully functional and interactive, this web application allows
              users to see a list of products, see details about each product,
              add them to the cart, increment the number of items and buy the
              products utilizing Stripe API.
            </p>
          </div>
        </div>
        <div className="right-content-about">
          <img
            id="img2"
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598037812/h-charis-online-store/hcharis-01_ygeuf2.svg"
            alt="Helena Charis logo"
          />
        </div>
      </div>
      <div className="sub-title-this">
        <h1>
          Development{" "}
          <span className="span-one-this">
            <span className="span-two-this">Phase</span>
          </span>
        </h1>
      </div>

      <div className="about-container">
        <div className="text-area-one">
          <h4>App Concept: </h4>
          <p>
            Fully functional and interactive, this web application allows users
            to see a list of products, see details about each product, add them
            to the cart, increment the number of items and buy the products
            utilizing Stripe API. The products are separated by category
            displayed in teh main menu. User can then choose specific products
            or click on the shop section to visualize the entire list of
            products. Furthermore, from a technical point of view, this projects
            aims to utilize a state management tool, Redux, to better serve the
            application components. For authentication, this projects uses
            Firebase.
          </p>
        </div>
        <div className="text-area-two">
          <h4>Technologies Used:</h4>
          <div className="organize-links">
            <div className="skills-left-col">
              <p>React</p>
              <p>Redux</p>

              <p>GraphQl</p>
              <p>FireBase</p>

              <p>JS</p>
              <p>SCSS</p>
              <p>Node</p>
              <p>FireBase</p>
              <p>Stripe API</p>
            </div>

            <div className="skills-right-col">
              <p>Style Components</p>
              <p>Heroku</p>
              <p>FontAwesome</p>
              <p>Cloudinary</p>

              <p>Adobe Illustrator</p>
              <p>Image retrieved from Unsplash and unDraw</p>
              <p>
                Credits:
                <br />
                <a href="https://unsplash.com/">Unsplash.com </a>
                <br />
                <a href="https://github.com/femioladeji/react-slideshow">
                  Slideshow Repo
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-area-three">
          <h4>Approach: </h4>
          <p>
            The main idea was an Online department store retail app that
            provides users with a variety of products for men, woman, children,
            and house decor. An immersive experience, where we allow the user to
            select specific product by category, view the product and add to the
            cart, preview the items in the cart and move to the checkout,where
            the can remove and increment the number of items before purchase.
            Finally, the user can use a fake credit card provided by stipe to
            complete the transaction.
          </p>
          <p>
            I am a super visual person, so I like to start my projects by
            designing the application wireframe on my draw handbook with a
            pencil, nothing too fancy but for a visual person like me it makes a
            whole lot of difference, I feel like I have a goal to meet, like
            when I am doing a mockup of some website, the design is layout for
            me I just need to follow the patterns. I normally, use canva.com to
            translate my drawings from paper to a more visual approach, canva is
            also the place where I start to brainstorm the name and logo of the
            application.{" "}
            <span
              onClick={readMoreHandler}
              className={
                readMore
                  ? "read-more-btn display-none"
                  : "read-more-btn display-block"
              }
            >
              Read More
            </span>
          </p>

          <p className={readMore ? "display-block" : "display-none"}>
            I normally, use canva.com to translate my drawings from paper to a
            more visual approach, canva is also the place where I start to
            brainstorm the name and logo of the application.{" "}
          </p>
          <p className={readMore ? "display-block" : "display-none"}>
            Thinking about some minors details brings a lot of character to my
            projects, like meaningful name or a logo, or changing the icon on
            the cursor when the user approaches a certain area of my
            application, this particular character can be seen throughout the
            entire application (like an easter egg, except I am the only one who
            knows about it 😂).
          </p>
          <p className={readMore ? "display-block" : "display-none"}>
            Furthermore, in this case specifically, I just had a new bourn so it
            was easy what the name of my app would be, after that I just create
            the Helena Charis store and the h-Charis logo.{" "}
          </p>
          <p className={readMore ? "display-block" : "display-none"}>
            Following the design phase, I have a pretty good idea of what my
            components structure will look like. Since react is a unidirectional
            data flow methodology it is important to understand which components
            will hold state or if I should incorporate a state management tool
            like redux or simple enough, context API.
          </p>
          <p className={readMore ? "display-block" : "display-none"}>
            Finally, it was code time!
          </p>
          <p
            onClick={readMoreHandler}
            className={
              readMore
                ? "read-more-btn display-block"
                : "read-more-btn display-none"
            }
          >
            Show Less
          </p>
        </div>
        <div className="text-area-four">
          <h4>Challenges:</h4>
          <p>
            Bringing a new technology onboard is always a challenge, at this
            time was not particularly easy to grasp my head around Redux at
            first. However, I just practice over and over, following the basic
            concepts and reading a lot of redux docs.
          </p>
          <p>
            Also, I learned a lot about middlewares like the logger and how
            awesome it is to see the previous and current state displaying in
            the console. Finally, separating my Redux environment with each
            section of my application in its own folder and files. For example:
          </p>
          <p>
            Having a main root-reducer and store in the same directory makes it
            easy for me to understand what each one of them does and how to
            manage my state.
          </p>
          <p>
            Deployment is something that I always struggled to do, however, this
            time after a bit of research and help form the community, I used
            this buildpackage specific for create-react-app apps, built by Mars
            Hall, can't say enough how much it was helpful! Check it out it is
            super helpful{" "}
            <a href="https://github.com/mars/create-react-app-buildpack">
              create-react-app-buildpack
            </a>
          </p>
        </div>
      </div>
      <br />
    </section>
  );
};

export default About;
