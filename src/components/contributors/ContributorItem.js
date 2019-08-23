import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContributorItem = ({ contributor: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/contributor/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

ContributorItem.propTypes = {
  contributor: PropTypes.object.isRequired
};

export default ContributorItem;
