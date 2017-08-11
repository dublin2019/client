import { List } from 'immutable'
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
const { Col, Row } = require('react-flexbox-grid');
const ImmutablePropTypes = require('react-immutable-proptypes');

import { getPrices } from '../../payments/actions'
import { setScene } from '../../app/actions/app'
import InstaLoginHack from './InstaLoginHack'
import MemberCard from './MemberCard'
import NewMemberCard from './NewMemberCard'

class Upgraders extends React.Component {

  static propTypes = {
    getPrices: React.PropTypes.func.isRequired,
    people: ImmutablePropTypes.list.isRequired,
    push: React.PropTypes.func.isRequired,
    setScene: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    const { people, prices, setScene } = this.props;
    if (!prices) getPrices();
    setScene({ title: 'Membership Upgrades', dockSidebar: false });
  }

  get memberCards() {
    const { people } = this.props;
    const hugoCount = people.reduce((sum, m) => (
      sum + (m.get('can_hugo_nominate') || m.get('can_hugo_vote') ? 1 : 0)
    ), 0);
    return people.map((member, key) => (
      <MemberCard
        key={key}
        member={member}
        showHugoActions={hugoCount === 10}
      />
    ));
  }

  render() {
    const { people, prices, push } = this.props
    const isLoggedIn = !!(people && people.size)
    const upgradePath = people && people.size === 1
      ? `/upgrade/${people.first().get('id')}` : '/upgrade/'
    localStorage.logoutPath = '/upgraders'; // return here, not to /
    return <Row style={{ marginBottom: -24 }}>
      <Col xs={12} sm={6} lg={4} lgOffset={2}>
        {isLoggedIn ? this.memberCards : <InstaLoginHack/>}
      </Col>
      <Col xs={12} sm={6} lg={4}>
        <NewMemberCard
          category="all"
          expandable={true}
          onSelectType={(type) => push(`/new/${type}`)}
          prices={prices}
        />
      </Col>
    </Row>
  }
}

export default connect(
  ({ purchase, user }) => ({
    people: user.get('people') || List(),
    prices: purchase.get('prices')
  }), {
    getPrices,
    push,
    setScene
  }
)(Upgraders);
