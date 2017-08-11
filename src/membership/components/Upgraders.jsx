import { List } from 'immutable'
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
const { Col, Row } = require('react-flexbox-grid');
const ImmutablePropTypes = require('react-immutable-proptypes');

import { setScene } from '../../app/actions/app'
import InstaLoginHack from './InstaLoginHack'
import MemberCard from './MemberCard'
import NewMemberCard from './NewMemberCard'

class Upgraders extends React.Component {

  static propTypes = {
    people: ImmutablePropTypes.list.isRequired,
    push: React.PropTypes.func.isRequired,
    setScene: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    const { setScene } = this.props;
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
    const { people, push } = this.props
    const isLoggedIn = !!(people && people.size)
    const upgradePath = people && people.size === 1
      ? `/upgrade/${people.first().get('id')}` : '/upgrade/'
    return <Row style={{ marginBottom: -24 }}>
      <Col xs={12} sm={6} lg={4} lgOffset={2}>
        {isLoggedIn ? this.memberCards : <InstaLoginHack/>}
      </Col>
      <Col xs={12} sm={6} lg={4}>
        <NewMemberCard
          category="upgrade"
          disabled={!isLoggedIn}
          expandable={isLoggedIn}
          onSelectType={() => push(upgradePath)}
        />
      </Col>
    </Row>
  }
}

export default connect(
  ({ purchase, user }) => ({
    people: user.get('people') || List(),
  }), {
    push,
    setScene
  }
)(Upgraders);
