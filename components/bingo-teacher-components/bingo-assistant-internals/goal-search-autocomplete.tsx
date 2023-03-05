'use client';
import Autocomplete from '../../tailwind-components-kimia-ui/autocomplete/autocomplete';

export const GoalSearchAutocomplete = ({
  searchBarValue,
  handleSearchValueChanged,
  allGoalNames,
}) => {
  return (
    <Autocomplete
      value={searchBarValue}
      setValue={handleSearchValueChanged}
      name='search'
      label='Goals'
      placeholder='Search for a goal...'
      suggestions={allGoalNames}
      notFound='No goals found with that name!'
    />
  );
};
