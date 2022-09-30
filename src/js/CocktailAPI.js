console.log(1, 'First Load');

class CockTailAPI {
  async getCategories(cat) {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + cat
    );
    var data = await response.json();
    return data;
  }

  async getSearchQuery(q) {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${q}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error('The data faild to load', { cause: err });
    }
  }
}
