// query: Map({ email, member_number, name })
export const memberLookup = (query) => ({
  module: 'members',
  type: 'MEMBER_LOOKUP',
  query
});

export const memberSet = ({ email, people, roles }) => ({
  module: 'members',
  type: 'MEMBER_SET',
  email,
  people,
  roles
});

export const memberUpdate = (id, changes) => ({
  module: 'members',
  type: 'MEMBER_UPDATE',
  id,
  changes
});

export const requestSlackInvite = () => ({
  module: 'members',
  type: 'REQUEST_SLACK_INVITE'
})
