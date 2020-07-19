import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./directory.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
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
        {this.state.sections.map(({ title, imageUrl, size, linkUrl, id }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
