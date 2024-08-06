import React, { useState } from 'react';

function GetDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>{date.toDateString()}</h1>
    </div>
  );
}

export default GetDate;