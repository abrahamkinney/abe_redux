import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import EventForm from './EventForm';

class ManageEventPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      event: Object.assign({}, this.props.event),
      errors: {}
    };
  }

  render() {
    return (
      <EventForm
        allAuthors={this.props.authors}
        event={this.state.event}
        errors={this.state.errors}
      />
    );
  }
}

ManageEventPage.propTypes = {
  event: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let event = {id: '', watchHref: '', title: '', authorID: '', length: '', category: ''};

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    event: event,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);
