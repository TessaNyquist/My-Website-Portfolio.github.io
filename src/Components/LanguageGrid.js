// LanguageGrid.js

import React from 'react';

function LanguageGrid({ data }) {
  return (
    <div className="LanguageGrid"> {/* Add a CSS class here */}
      {data.map((language) => (
        <div key={language.id} className="LanguageGridItem">
          {language.image}
        </div>
      ))}
    </div>
  );
}

export default LanguageGrid;
