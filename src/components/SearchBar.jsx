import React from 'react';

import SearchIcon from '../assets/search.svg';

const SearchBar = ({
  id = 'shared-movie-search',
  label = 'Search for a movie',
  value,
  onChange,
  onSubmit,
  placeholder,
  buttonLabel = 'Search',
  variant = 'page',
}) => {
  const shellClassName =
    variant === 'hero'
      ? 'app-search-shell app-search-shell-hero'
      : 'app-search-shell app-search-shell-page';

  return (
    <form onSubmit={onSubmit} className={shellClassName}>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="app-search-input min-w-0 flex-1"
        />
        <button
          type="submit"
          className="app-button-primary rounded-[1.25rem] px-6 py-4 text-sm tracking-[0.22em]"
        >
          {buttonLabel}
          <img src={SearchIcon} alt="" className="h-5 w-5 opacity-80" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
