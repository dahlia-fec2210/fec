import React from 'react';

export default function NicknameInput({ nickname, setNickname }) {
  const handleChange = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  return (
    <label className="nickname-label" htmlFor="nickname">
      Nickname:
      <input
        type="text"
        id="nickname"
        className="nickname-input"
        placeholder="Example: jackson11!"
        value={nickname}
        onChange={handleChange}
      />
    </label>
  );
}
