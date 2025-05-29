import React from "react";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const Form: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <a href=".." type="button">
            Cancel
          </a>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
};
