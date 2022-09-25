console.log(1, "First Load");

class CockTailAPI {
  async getCategories(cat) {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + cat);
    var data = await response.json();
    return data;
  }
}