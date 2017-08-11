import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { keyLogin } from '../../app/actions/auth';
import MD5 from '../../lib/md5';

/**
 * This Dublin2019 component is made for use at WorldCon75 Helsinki alone,
 * to run on the terminals for people upgrading their membership.
 *
 * It bypasses the login link emailing step, by using a emailHashToLoginKey
 * look-up table from salted, md5 hashed emails, to that email's login key.
 * (if you know someone's voting email address you can buy them an upgrade)
 */

// if we need this login to go to some particular place, pick which here
const loginPath = (location.hash.match(/^#to=([^&]+)/) || [])[1];

// md5.hex(`Salted!${email.toLowerCase()}`) => login key
const emailHashToLoginKey =
{ '390a0e6d453de00e84013054a18f525a': 'ISrypVXEQk3E' // oyasumi+test2@gmail.com
};

function getKeyForEmail(email) {
  email = email || '';
  let salted = `Salted!${email.toLowerCase()}`;
  return emailHashToLoginKey[MD5.hex(salted)];
}

class InstaLoginHack extends React.Component {

  static propTypes = {
    cardStyle: PropTypes.object,
    keyLogin: PropTypes.func.isRequired,
  }

  state = {
    email: ''
  }

  render() {
    const { cardStyle, keyLogin } = this.props;
    const { email } = this.state;
    const validEmail = email && /.@.*\../.test(email);
    let key = validEmail && getKeyForEmail(email);

    return <div>
      <Card style={cardStyle}>
        <CardHeader
          title="Login to Upgrade Existing Membership"
          style={{ fontWeight: 600 }}
        />
        <CardText style={{ marginTop: -16 }}>
          <div className="html-container">
            <p>
              If you voted in Site Selection in Helsinki,
              enter the email address you used for that below.
            </p>
            <p>
              If you are a Dublin BID Presupporter / Backer / Friend / Super Friend,
              please enter the email address you used for that, instead.
            </p>
          </div>
          <form onSubmit={() => (key = getKeyForEmail(email)) && keyLogin(email, key, loginPath)}>
            <TextField
              autoFocus={true}
              id="email"
              fullWidth={true}
              floatingLabelText="Email"
              value={email}
              onChange={(_, email) => this.setState({ email })}
            />
            <RaisedButton
              label={key ? 'Enter Email Address' : 'Login to Upgrade'}
              fullWidth={true}
              primary={true}
              disabled={!validEmail || !key}
              style={{ marginTop: 12 }}
              onTouchTap={() => keyLogin(email, key, loginPath)}
            />
          </form>
        </CardText>
      </Card>
    </div>
  }
}

export default connect(null, { keyLogin })(InstaLoginHack);
