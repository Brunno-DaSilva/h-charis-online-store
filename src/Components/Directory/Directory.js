import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./directory.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "Jeans",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595211674/h-charis-online-store/jason-leung-DmD8HVOjy4c-unsplash_vlhbxm.jpg",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "JACKETS & COATS",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595212188/h-charis-online-store/marcos-rivas-OZokCdO5goI-unsplash_gwivix.jpg",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595211757/h-charis-online-store/jayson-hinrichsen-qLs4WYXqLNY-unsplash_nxhhk3.jpg",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595211465/h-charis-online-store/liz_uoljkf.jpg",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595378590/h-charis-online-store/male_smile_jy8baq.jpg",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
      {
        title: "kids",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595194741/h-charis-online-store/ian-pic_bp4x1p.jpg",
        size: "large",
        id: 6,
        linkUrl: "shop/kids",
      },
      {
        title: "house",
        imageUrl:
          "https://res.cloudinary.com/duprwuo4j/image/upload/v1595194539/h-charis-online-store/family6_oqxczh.jpg",
        size: "large",
        id: 6,
        linkUrl: "shop/house",
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
