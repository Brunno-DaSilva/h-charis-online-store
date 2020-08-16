const INITIAL_STATE = {
  sections: [
    {
      title: "Jeans",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905410/h-charis-online-store/menu/4_pjts8f.png",
      id: 1,
      linkUrl: "shop/jeans",
    },
    {
      title: "Jackets",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905410/h-charis-online-store/menu/1_re9n0r.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905410/h-charis-online-store/menu/2_viwtqw.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905414/h-charis-online-store/menu/Blue_Green_Bordered_Kindness_Quote_Graphic_qctkgp.png",
      size: "large",
      id: 4,
      linkUrl: "shop/women",
    },
    {
      title: "men",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905410/h-charis-online-store/menu/3_sy3n7p.png",
      size: "large",
      id: 5,
      linkUrl: "shop/men",
    },
    {
      title: "kids",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905410/h-charis-online-store/menu/5_bmmapi.png",
      size: "large",
      id: 6,
      linkUrl: "shop/kids",
    },
    {
      title: "house",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1596905931/h-charis-online-store/menu/Untitled_design_ciukoe.png",
      size: "large",
      id: 7,
      linkUrl: "shop/house",
    },
    {
      title: "hats",
      imageUrl:
        "https://res.cloudinary.com/duprwuo4j/image/upload/v1597545926/h-charis-online-store/Blue_Green_Bordered_Kindness_Quote_Graphic_1_afmpku.png",
      size: "large",
      id: 8,
      linkUrl: "shop/hats",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
