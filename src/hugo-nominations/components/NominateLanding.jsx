import { Map } from 'immutable'
import PropTypes from 'prop-types'
import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import { Col, Row } from 'react-flexbox-grid'
import Snackbar from 'material-ui/Snackbar'

import { setScene } from '../../app/actions/app'
import { ConfigConsumer } from '../../lib/config-context'
import { setNominator, clearNominationError } from '../actions'

import './Nominate.css'

const Messages = connect(
  ({ nominations }) => {
    const [category, data] = nominations.findEntry(
      data => data.get('error'),
      null,
      []
    )
    return {
      category,
      error: data ? data.get('error') : ''
    }
  },
  {
    clearNominationError
  }
)(({ category, error, clearNominationError }) => (
  <Snackbar
    open={!!category}
    message={category ? `${category}: ${error}` : ''}
    onRequestClose={() => clearNominationError(category)}
  />
))

const NominationsHead = ({ active, name, signature, id }) => (
  <Row className="bg-text">
    <Col xs={10} xsOffset={1} lg={8} lgOffset={2} style={{ paddingTop: 20 }}>
      <h1>{'Hugo nominations for ' + name}</h1>
    </Col>
    <Col xs={10} xsOffset={1} sm={8} smOffset={2} lg={6} lgOffset={3}>
       {!active ? (
        <p
          style={{
            borderBottom: '1px solid gray',
            fontWeight: 'bold',
            marginBottom: '2em',
            paddingBottom: '2em'
          }}
        >
          At this time Hugo nominations have closed. We are working to compile
          the final ballot in each category and will announce the results in the
          first week of April.
        </p>
      ) : null}
      <p>
        Thank you for participating in the 2019 Hugo Awards, John W.
        Campbell Award, Lodestar Award and 1944 Retro Hugo Awards! 
        The deadline for nominations is Friday March 15th, 2019 at 11:59pm
        PDT (GMT+9). You can make as many changes as you
        like to your nomination ballot until then. Your current ballot will
        be emailed to you an hour after you stop making changes to it.
      </p>
      <p>
        Please go to this page to <a href={"/#/hugo/nominate/" + id }>nominate
        for the 2019 Hugo awards</a>.
      </p>
      <p>
        Please go to this page to <a href={"/#/hugo/nominate-retro/" + id }>nominate
        for the 1944 Retro Hugo awards</a>.
      </p>
    </Col>
  </Row>
)

class NominateLanding extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    person: ImmutablePropTypes.map,
    setNominator: PropTypes.func.isRequired,
    setScene: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    const { id, person, setNominator } = props
    if (person && id !== person.get('id')) setNominator(person.get('id'))
    this.state = { signature: '' }
  }

  componentWillReceiveProps(nextProps) {
    const { id, person, setNominator } = nextProps
    if (person && id !== person.get('id')) setNominator(person.get('id'))
  }

  componentDidMount() {
    this.props.setScene({ title: 'Hugo and Retro Hugo Nominations', dockSidebar: false })
  }

  render() {
    const { id, person } = this.props
    const { signature } = this.state
    return !id ? (
      <div>Loading...</div>
    ) : !person ? (
      <div>Nominator not found!</div>
    ) : (
      <ConfigConsumer>
        {({ getMemberAttr }) => {
          const active = !!getMemberAttr(person).hugo_nominator
          return (
            <div>
              <NominationsHead
                active={active}
                name={this.name}
                signature={signature}
                id={id}
              />
            </div>
          )
        }}
      </ConfigConsumer>
    )
  }

  get name() {
    const { person } = this.props
    if (!Map.isMap(person)) return '<>'
    const pna = [
      person.get('public_first_name'),
      person.get('public_last_name')
    ]
    const pns = pna.filter(s => s).join(' ')
    return pns || person.get('legal_name')
  }
}

export default connect(
  ({ app, user }, { params }) => {
    const id = params && Number(params.id)
    const people = user.get('people')
    return {
      id: app.get('person'),
      person: people && people.find(p => p.get('id') === id)
    }
  },
  {
    setNominator,
    setScene
  }
)(NominateLanding)
