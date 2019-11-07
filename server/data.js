const d = new Date()
const listings = [
  {
    id: 1,
    name: "NanoFiber Bag",
    description: 'This Purse is Fresh -On White',
    picture_url: 'https://i.pinimg.com/564x/a5/41/8a/a5418a511e7344c88b8eec6d31da1345.jpg',
    starting_bid: 10,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 9, d.getHours(), d.getMinutes(), d.getSeconds()).toLocaleString(),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, d.getMinutes(), d.getSeconds()),
    winner: 0
  },
  {
    id: 2,
    name: "Kanye's Listing",
    description: 'This is another description',
    picture_url: 'https://i.pinimg.com/564x/9a/90/97/9a909774449dbb636342b4ded8ebb420.jpg',
    starting_bid: 50,
    user_id: 2,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 4, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 20, d.getSeconds()),
    winner: 0
  },
  {
    id: 3,
    name: "Bella's Listing",
    description: 'Karl Lagerfelds Cat',
    picture_url: 'https://static.wixstatic.com/media/112954_e7315972b6a742f188d4381fb2c24419~mv2.png/v1/fill/w_498,h_418,al_c,lg_1/112954_e7315972b6a742f188d4381fb2c24419~mv2.png',
    starting_bid: 20,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 2, d.getSeconds()),
    winner: 0
  },
  {
    id: 4,
    name: "Naomi's Listing",
    description: 'Modern Lisa',
    picture_url: 'https://i.pinimg.com/564x/9f/b5/0a/9fb50a24315ce3d8816fda0cc4297048.jpg',
    starting_bid: 200,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 8, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 40, d.getSeconds()),
    winner: 0
  },
  {
    id: 5,
    name: "Gallery listing",
    description: 'Art Gallery',
    picture_url: 'https://i.pinimg.com/564x/0b/30/80/0b3080fab5d444a7c4ab55687829c083.jpg',
    starting_bid: 40,
    user_id: 5,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 3, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 10, d.getSeconds()),
    winner: 0
  },
  {
    id: 6,
    name: 'Expired Listing',
    description: 'This has expired',
    picture_url: 'https://i.pinimg.com/564x/31/d8/3a/31d83af661c9ecfe103783a78b32b427.jpg',
    starting_bid: 50,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 15, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, d.getHours(), d.getMinutes() + 10, d.getSeconds()),
    winner: 0
  },
  {
    id: 7,
    name: 'Listing Karl Won',
    description: 'Congratulations Zane',
    picture_url: 'https://i.pinimg.com/564x/25/22/c3/2522c33dec1ae8a65aa16dedf79a2cac.jpg',
    starting_bid: 60,
    user_id: 5,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 14, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() - 12, d.getMinutes() + 10, d.getSeconds()),
    winner: 4
  }
]

const users = [
  {
    id: 1,
    user_name: 'Naomi',
    name: 'Naomi',
    password: 'Naomi',
    email: 'naomi@naom.na.om'
  },
  {
    id: 2,
    user_name: 'Kanye',
    name: 'Kanye',
    password: 'Kanye',
    email: 'kanye@kanye.kan.ye'
  },
  {
    id: 3,
    user_name: 'Karl',
    name: 'Karl',
    password: 'Karl',
    email: 'karl@karl.ka.rk'
  },
  {
    id: 4,
    user_name: 'Post',
    name: 'Post',
    password: 'Post',
    email: 'post@post.po.s'
  },
  {
    id: 5,
    user_name: 'Zane',
    name: 'Zane',
    password: 'Zane',
    email: 'zane@zane.zan.e'
  }
]

const bids = [
  {
    id: 1,
    listing_id: 1,
    user_id: 3,
    bid_amount: 20,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 20, d.getSeconds())
  },
  {
    id: 2,
    listing_id: 1,
    user_id: 4,
    bid_amount: 25,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 15, d.getSeconds())
  },
  {
    id: 3,
    listing_id: 1,
    user_id: 3,
    bid_amount: 25.50,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 10, d.getSeconds())
  },
  {
    id: 4,
    listing_id: 2,
    user_id: 1,
    bid_amount: 50.50,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 5, d.getSeconds())
  },
  {
    id: 5,
    listing_id: 7,
    user_id: 2,
    bid_amount: 80,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 2, d.getHours(), d.getMinutes() - 5, d.getSeconds())
  },
  {
    id: 6,
    listing_id: 7,
    user_id: 4,
    bid_amount: 100,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, d.getHours(), d.getMinutes() - 5, d.getSeconds())
  }
]

module.exports = {
  listings: listings,
  users: users,
  bids: bids
}
