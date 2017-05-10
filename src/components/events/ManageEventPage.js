import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import * as EventForm from './EventForm';

class ManageEventPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      event: Object.assign({}, this.props.event),
      error: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Event</h1>
        <EventForm
          allAuthors={[]}
          event={this.state.event}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageEventPage.PropTypes = {
  event: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let event = {id: '', watchHref: '', title: '', authorID: '', length: '', category: ''};
  return {
    event: event
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);
