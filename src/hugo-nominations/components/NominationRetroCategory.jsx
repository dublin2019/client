import { Map } from 'immutable'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ListCheck from 'material-ui/svg-icons/av/playlist-add-check'
import ContentUndo from 'material-ui/svg-icons/content/undo'
import PropTypes from 'prop-types'
import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import time_diff from '../../lib/time_diff'
import { editNomination, submitNominations, resetNominations } from '../actions'
import {
  categoryInfo,
  maxNominationsPerCategory,
  nominationFields
} from '../constants'

import { NominationFillerRow, NominationRow } from './NominationRow'

class NominationActionsRow extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    saveTime: PropTypes.instanceOf(Date)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.disabled !== this.props.disabled ||
      nextProps.saveTime !== this.props.saveTime
    )
  }

  render() {
    const { active, disabled, onSave, onReset, saveTime } = this.props
    return (
      <Row middle="xs" style={{ paddingTop: 20 }}>
        <Col xs>
          {saveTime ? (
            <span style={{ color: 'rgba(0, 0, 0, 0.3)' }} title={saveTime}>
              {'Last saved ' + time_diff(saveTime)}
            </span>
          ) : null}
        </Col>
        {active ? (
          <Col xs>
            <RaisedButton
              label="Save"
              disabled={disabled}
              disabledBackgroundColor="transparent"
              icon={<ListCheck />}
              onClick={onSave}
              style={{ float: 'right', marginLeft: 15 }}
              title="Save this category"
            />
            <RaisedButton
              label="Reset"
              disabled={disabled}
              disabledBackgroundColor="transparent"
              icon={<ContentUndo />}
              onClick={onReset}
              style={{ float: 'right', marginLeft: 15 }}
              title="Reset this category"
            />
          </Col>
        ) : null}
      </Row>
    )
  }
}

const nominationRowLinks = (n, props) => {
  if (n <= 0) return null
  const res = []
  for (let i = 0; i < n; ++i)
    res.push(<NominationFillerRow key={`link-${i}`} {...props} />)
  return res
}

const NominationBody = ({
  active,
  colSpan,
  fields,
  maxNominations,
  onChange,
  onSave,
  onReset,
  state
}) => {
  const clientData = state.get('clientData')
  const serverData = state.get('serverData')
  const serverTime = state.get('serverTime')
  const isFetching = state.get('isFetching')
  const rows =
    active && clientData.size < maxNominations
      ? clientData.push(Map())
      : clientData
  return (
    <div>
      {rows.map((rowValues, idx) => (
        <NominationRow
          key={idx}
          active={active}
          colSpan={colSpan}
          defaultValues={serverData.get(idx, Map())}
          disabled={isFetching}
          fields={fields}
          onChange={(field, value) =>
            onChange(idx, rowValues.set(field, value))
          }
          onRemove={() => onChange(idx, null)}
          values={rowValues}
        />
      ))}
      {nominationRowLinks(maxNominations - rows.size, { colSpan, fields })}
      <NominationActionsRow
        active={active}
        disabled={isFetching || clientData.equals(serverData)}
        onSave={onSave}
        onReset={onReset}
        saveTime={serverTime ? new Date(serverTime) : null}
      />
    </div>
  )
}

NominationBody.propTypes = {
  active: PropTypes.bool.isRequired,
  colSpan: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  maxNominations: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  state: ImmutablePropTypes.mapContains({
    clientData: ImmutablePropTypes.list.isRequired,
    serverData: ImmutablePropTypes.list.isRequired
    // serverTime: React.PropTypes.string,
    // isFetching: React.PropTypes.bool.isRequired,
    // error: React.PropTypes.string
  }).isRequired
}

const NominationRetroCategory = ({ category, ...props }) => {
  const { title, description, nominationFieldLabels } = categoryInfo[category]
  const fields = nominationFields(category)
  const colSpan = Math.floor(12 / fields.size)
  const background = category.startsWith('Retro')?"RetroNominationCategory":"NominationCategory"
  if (!category.startsWith('Retro')) return null
  return (
    <Card className={background} >
      <CardHeader
        className="NominationHeader"
        title={title}
        titleStyle={{
          fontSize: 24,
          fontWeight: 300,
          textAlign: 'center',
          width: '100%'
        }}
      />
      <CardText>{description}</CardText>
      <CardText>
        <Row>
          {fields.map(field => (
            <Col key={field} xs={colSpan}>
              <h3>{nominationFieldLabels[field] || field}</h3>
            </Col>
          ))}
        </Row>
        <NominationBody
          {...props}
          colSpan={colSpan}
          fields={fields}
          maxNominations={maxNominationsPerCategory}
        />
      </CardText>
    </Card>
  )
}

export default connect(
  (state, { category }) => ({
    state: state.nominations.get(category)
  }),
  (dispatch, { category, signature }) =>
    bindActionCreators(
      {
        onChange: (idx, values) => editNomination(category, idx, values),
        onSave: () => submitNominations(category, signature),
        onReset: () => resetNominations(category)
      },
      dispatch
    )
)(NominationRetroCategory)
