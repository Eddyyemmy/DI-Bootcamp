const exp = require('express');
const Rssp = require('rss-parser');

const app = exp();
const rssp = new Rssp();

app.set('view engine', 'ejs');

app.use(exp.urlencoded({extended:false}));
app.use(exp.json());

app.get("/", renderFeed);
app.get("/search", searchFeed);

app.post("/search/title", searchFeed);
app.post("/search/category", searchFeed);
let items = [];

populateItems();
async function populateItems(){
  const feed = await rssp.parseURL("https://www.thefactsite.com/feed/");
   items = feed.items;
}

function searchFeed(req,res){
  const body = req.body;
  const title = body.title;
  const category = body.categories;
  if (category == null && title == null) {
    return res.render("search.ejs", {items: items});
  }
  const itemsToReturn =
  title == null ? getPostsInCategory(category) : getPostsTitle(title);
  res.render("index.ejs", {items: itemsToReturn});
}

function getPostsInCategory(category) {
  console.log("Item gotten from category", category);
  return items.filter((item) =>
    item.categories.some((el) => el.toLowerCase().includes
    (category.toLowerCase()))
  );
}

function getPostsTitle(title) {
  return items.filter((item) => item.title.toLowerCase().includes
    (title.toLowerCase())
  );
}

function renderFeed(req, res) {
  res.render("index.ejs", { items });
};

// async function sendFeed(req, res) {
//   const feed = await rssp.parseURL('https://www.thefactsite.com/feed/');
//   const title = feed.title;
//   const description = feed.description;
//   const items = feed.items;
//   res.send({title,description,items});
// }

app.listen(3000)
