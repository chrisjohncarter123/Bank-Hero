import React from 'react';

function ContentHeader(props) {
  return (
    <div className="contentHeader">
        <br />
            <h2>{props.title}</h2>
        <br />
    </div>
  );
}

export default ContentHeader;
