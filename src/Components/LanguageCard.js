import React from 'react';

function LanguageCard({ language }) {
  return (
    <div className="LanguageCard">
      {language.image}
      <p>{language.name}</p>
    </div>
  );
}

export default LanguageCard;