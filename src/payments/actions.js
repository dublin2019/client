export const buyDaypass = (person, amount, email, source, callback) => ({
  module: 'members',
  type: 'BUY_DAYPASS',
  amount,
  callback,
  email,
  person,
  source
});

export const buyMembership = (member, amount, email, source, callback) => ({
  module: 'members',
  type: 'BUY_MEMBERSHIP',
  amount,
  callback,
  email,
  member,
  source
});

// items: [{ category, comments, data, email, invoice, name, person_id, type }]
export const buyOther = (account, email, source, items, callback) => ({
  module: 'members',
  type: 'BUY_OTHER',
  account,
  callback,
  email,
  items,
  source
});

export const buyUpgrade = (id, membership, paper_pubs, amount, email, source, callback) => ({
  module: 'members',
  type: 'BUY_UPGRADE',
  amount,
  callback,
  email,
  id,
  membership,
  paper_pubs,
  source
});

export const getDaypassPrices = () => ({
  module: 'members',
  type: 'GET_DAYPASS_PRICES'
});

export const getPrices = () => ({
  module: 'members',
  type: 'GET_PRICES'
});

export const getPurchaseData = () => ({
  module: 'members',
  type: 'GET_PURCHASE_DATA'
});

export const getPurchaseList = () => ({
  module: 'members',
  type: 'GET_PURCHASE_LIST'
});

export const getStripeKeys = () => ({
  module: 'members',
  type: 'GET_STRIPE_KEYS'
});
