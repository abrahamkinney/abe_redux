import React, {PropTypes} from 'react';
import EventListRow from './EventListRow';

const EventList = ({events}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {events}
      </tbody>
    </table>
  );
};

EventList.propTypes = {
  events: PropTypes.object.isRequired
};

export default EventList;
