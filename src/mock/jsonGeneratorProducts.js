let scenario = {
  groups(tags) {
    let groups = [];
    while (groups.length < 10) {
      let name;
      do {
        name = lorem(1, 'words');
      } while (name.length <= 5);
      name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
      groups.push(`${name} ${tags.lorem(1, 'words')}`);
    }
    return groups;
  },
  products: [
    {
      'repeat(100)': {
        _id: '{{objectId()}}',

        name(tags, parent) {
          let name;
          do {
            name = lorem(1, 'words');
          } while (name.length <= 5);

          name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
          return name;
        },

        stocked: '{{bool()}}',

        price: '{{floating(1, 4000, 2, "$0,0.00")}}',

        category(tags, parent) {
          let id = tags.integer(0, 9);
          return parent.groups[id];
        },
      },
    },
  ],
};
