import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import EventForm from './EventForm';

class ManageEventPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      event: Object.assign({}, props.event),
      errors: {}
    };

    this.updateEventState = this.updateEventState.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
  }

  updateEventState(e) {
    const field = e.target.name;
    let event = Object.assign({}, this.state.event);
    event[field] = e.target.value;
    return this.setState({event: event});
  }

  saveEvent(e) {
    console.log("saved");
    e.preventDefault();
    this.props.actions.saveEvent(this.state.event);
    this.context.router.push('/events');
  }

  render() {
    return (
      <EventForm
        allAuthors={this.props.authors}
        onChange={this.updateEventState}
        onSave={this.saveEvent}
        event={this.state.event}
        errors={this.state.errors}
      />
    );
  }
}

ManageEventPage.propTypes = {
  event: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageEventPage.contextTypes = {
  router: PropTypes.object
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
