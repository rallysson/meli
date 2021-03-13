function formatItems(items = []) {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    city: item.address.city_name,
    price: {
      amount: item.price,
      currency: item.currency_id,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));
}

function formatCategories(category) {
  return category.path_from_root.map((path) => path.name);
}

function formatItem({ item, category, description }) {
  return {
    item: {
      id: item.id,
      categories: formatCategories(category),
      title: item.title,
      price: {
        amount: item.price,
        currency: item.currency_id,
      },
      picture: item.pictures[1].secure_url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
  };
}

module.exports = {
  formatItems,
  formatItem,
};
