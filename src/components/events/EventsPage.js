import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';


class EventsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      event: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e) {
    const event = this.state.event;
    event.title = e.target.value;
    this.setState({event});
  }

  onClickSave() {
    this.props.actions.createEvent(this.state.event);
  }

  eventRow(event, index) {
    return <div key={index}>{event.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Events and Readings</h1>
        {this.props.events.map(this.eventRow)}
        <h2>Add Event</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.event.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

EventsPage.propTypes = {
  events: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
