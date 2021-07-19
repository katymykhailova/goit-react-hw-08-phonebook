import PropTypes from 'prop-types';

import { Label, FilterInput } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <FilterInput type="text" debounceTimeout={300} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
