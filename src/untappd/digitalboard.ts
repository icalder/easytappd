export type Item = {
  id: string;
  untappd_id: string;
  untappd_beer_slug: string;
  type: string;
  name: string;
  style: string;
  brewery: string;
  brewery_location: string;
  abv: string;
  label_image_thumb: string;
  containers: [
    {
      price: string;
      name: string;
    }
  ];
};

export type DigitalBoard = {
  website: string;
  menus: [
    {
      id: string;
      name: string;
      sections: [
        {
          id: string;
          name: string;
          styles: string[];
          items: Item[];
        }
      ];
    }
  ];
};
