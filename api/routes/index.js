const express = require("express");

const { formatItems, formatItem } = require("../formatters");
const { get } = require("../request");

const router = express.Router();

router.get("/", async function (req, res, next) {
  const { query } = req.query;

  try {
    const data = await get(
      encodeURI(`https://api.mercadolibre.com/sites/MLB/search?q=​${query}`)
    );

    res.json({
      items: formatItems(data.results.slice(0, 4)),
    });
  } catch (e) {
    res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const UrlBase = "https://api.mercadolibre.com";

  try {
    const item = await get(encodeURI(`${UrlBase}/items/${id}`));

    const category = await get(`${UrlBase}/categories/${item.category_id}`);
    const description = await get(
      encodeURI(`${UrlBase}/items/${id}/description`)
    );

    res.json(formatItem({ item, category, description }));
  } catch (e) {
    res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
});

module.exports = router;
