import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const EventForm = ({event, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Events</h1>
      <TextInput
        name="title"
        label="title"
        value={event.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorID"
        label="Author"
        value={event.authorID}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorID}/>

      <TextInput
        name="category"
        label="Category"
        value={event.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={event.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        name="submit"
        disabled={loading}
        value={loading ? 'Saving . . . ' : 'Ssssave'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

EventForm.propTypes = {
  event: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default EventForm;
