import React from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import ListCheck from 'material-ui/svg-icons/av/playlist-add-check'
import { submitNominations } from '../actions'

const SaveButton = ({ changedCategories, signature, submitNominations }) => (
      <RaisedButton
        label="Save all"
        disabled={changedCategories.size == 0}
        disabledBackgroundColor="transparent"
        icon={<ListCheck />}
        onClick={() =>
          changedCategories
            .keySeq()
            .forEach(category => submitNominations(category, signature))
        }
        style={{ float: 'right', marginLeft: 15 }}
        title="Save all"
      />
)

export default connect(
  ({ nominations }) => ({
    changedCategories: nominations.filterNot(data =>
      data.get('clientData').equals(data.get('serverData'))
    )
  }),
  {
    submitNominations
  }
)(SaveButton)

