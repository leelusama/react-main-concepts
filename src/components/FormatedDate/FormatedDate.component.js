import React from 'react';

function FormatedDate({ date, locale = 'ru-RU' }) {
  const _date = new Date(date);
  const formatedDate = _date.toLocaleDateString(locale);
  const formatedTime = _date.toLocaleTimeString(locale);
  return <time dateTime={date}>{`${formatedDate} ${formatedTime}`}</time>;
}

export default FormatedDate;
